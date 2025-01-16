const exercise = ({ dbs }) => {
  return Object.freeze({
    getAllCategory,
    addCategory,
    deleteCategory,
    addExercise,
    addExerciseLogs,
    getExerciseLogs,
    getAllExercise,
    updateExerciseLogs,
    deleteExercise,
  });

  async function getAllExercise(pageNumber, email) {
    const connect = await dbs();
    const limit = 10;
    const offset = (pageNumber - 1) * limit;

    const sqlExercises =
      "SELECT email,exercise_id, exercise_name, description, category_id, created_at FROM public.exercises WHERE email = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3";
    const exercises = await connect.query(sqlExercises, [email, limit, offset]);

    const sqlCount = "SELECT COUNT(*) FROM public.exercises";
    const countResult = await connect.query(sqlCount);

    const totalExercises = parseInt(countResult.rows[0].count, 10);

    const totalPages = Math.ceil(totalExercises / limit);

    return {
      exercises: exercises.rows,
      totalExercises,
      totalPages,
    };
  }

  async function getAllCategory() {
    const connect = await dbs();
    const sql =
      "SELECT category_id, category_name FROM public.exercise_categories";
    return connect.query(sql);
  }

  async function addCategory(category) {
    const connect = await dbs();
    const sql =
      "INSERT INTO public.exercise_categories (category_name) VALUES($1) RETURNING category_id";

    const params = [category];
    return connect.query(sql, params);
  }

  async function deleteCategory(id) {
    const connect = await dbs();
    const sql = "DELETE FROM public.exercise_categories WHERE category_id=$1";

    const params = [id];

    const result = await connect.query(sql, params);

    if (result.rowCount > 0) {
      return "success";
    } else {
      return "Category not found or already deleted";
    }
  }

  async function getExerciseLogs(idExercise) {
    const connect = await dbs();
    const sql = "SELECT * FROM public.exercise_logs WHERE exercise_id= $1";
    const params = [idExercise];
    return connect.query(sql, params);
  }

  async function addExercise(exercise) {
    const connect = await dbs();
    const sql = ` INSERT INTO public.exercises (exercise_name, description, category_id, created_at, email) 
                    VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4) RETURNING exercise_id `;

    const params = [
      exercise.exercise_name,
      exercise.description,
      exercise.category_id,
      exercise.email,
    ];
    return connect.query(sql, params);
  }

  async function addExerciseLogs(exerciseLogs, idExercise) {
    const connect = await dbs();

    const params = [];
    const valuesPlaceholder = [];
    exerciseLogs.map((exerciseLog, index) => {
      const startIndex = index * 4 + 1;
      valuesPlaceholder.push(
        `($${startIndex}, $${startIndex + 1}, CURRENT_TIMESTAMP, $${
          startIndex + 2
        }, $${startIndex + 3})`
      );
      params.push(
        idExercise,
        exerciseLog.duration_seconds,
        exerciseLog.question,
        exerciseLog.answer
      );
    });

    const sql = `INSERT INTO public.exercise_logs (exercise_id, duration_seconds, created_at, question, answer) VALUES ${valuesPlaceholder.join(
      ", "
    )};`;

    const result = await connect.query(sql, params);
    if (result.rowCount > 0) {
      return "success insert exercise_logs";
    } else {
      return "Failed to insert the excercise_logs";
    }
  }

  async function updateExerciseLogs(answerSymbol) {
    const connect = await dbs();

    for (const entry of answerSymbol) {
      console.log(entry);
      const sqlUpdateLog = `
      UPDATE public.exercise_logs
      SET total_answer = $1,
          total_correct = $2,
          total_incorrect = $3
      WHERE log_id = $4;
    `;

      const params = [
        entry.totalAnswer,
        entry.totalCorrect,
        entry.totalIncorrect,
        entry.id_logs,
      ];

      const result = await connect.query(sqlUpdateLog, params);

      if (result.rowCount === 0) {
        return `Failed to update exercise_log with log_id ${entry.id_logs}`;
      }
    }

    return "Successfully updated exercise logs";
  }

async function deleteExercise(exercise_id) {
  const connect = await dbs();

  try {
    await connect.query('BEGIN');
    
    const deleteLogsSql = 'DELETE FROM public.exercise_logs WHERE exercise_id = $1';
    await connect.query(deleteLogsSql, [exercise_id]);
    
    const deleteExerciseSql = 'DELETE FROM public.exercises WHERE exercise_id = $1';
    const result = await connect.query(deleteExerciseSql, [exercise_id]);

    if (result.rowCount === 0) {
      throw new Error('Exercise not found or already deleted');
    }

    await connect.query('COMMIT');
    
    return 'Exercise and associated logs deleted successfully';
  } catch (error) {
    await connect.query('ROLLBACK');
    return `Failed to delete exercise and logs: ${error.message}`;
  }
}


};

module.exports = exercise;

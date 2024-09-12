const exercise = ({ dbs }) => {
    return Object.freeze({
        getAllCategory,
        addCategory,
        deleteCategory,
        addExercise,
        addExerciseLogs,
        deleteExercise,
        getExerciseLogs
    });
  
    async function getAllCategory() {
      const connect = await dbs();
      const sql = "SELECT category_id, category_name FROM public.exercise_categories";
      return connect.query(sql);
    }
  
    async function addCategory(category) {
      const connect = await dbs();
      const sql =  "INSERT INTO public.exercise_categories (category_name) VALUES($1) RETURNING category_id";  

      const params = [category];
      return connect.query(sql, params); 
    }
  
    async function deleteCategory(id) {
      const connect = await dbs();
      const sql = "DELETE FROM public.exercise_categories WHERE category_id=$1";
    
      const params = [id];

      const result = await connect.query(sql, params);

      if (result.rowCount > 0) {
          return "success" ;
      } else {
          return "Category not found or already deleted" ;
      }
    }

    async function getExerciseLogs(idExercise) {
      const connect = await dbs();
      const sql = "SELECT * FROM public.exercise_logs WHERE exercise_id= $1";
      const params = [idExercise]
      return connect.query(sql, params);
    }

    async function addExercise(exercise) {
      const connect = await dbs();
      const sql = ` INSERT INTO public.exercises (exercise_name, description, category_id, created_at) 
                    VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING exercise_id `;
      
      const params = [exercise.exercise_name, exercise.description, exercise.category_id];
      return connect.query(sql, params);
    }

    async function addExerciseLogs(exerciseLogs, idExercise) {
      const connect = await dbs();

      const params = [];
      const valuesPlaceholder = [];
      exerciseLogs.map((exerciseLog, index) => {
        const startIndex = index * 4 + 1;
        valuesPlaceholder.push(`($${startIndex}, $${startIndex + 1}, CURRENT_TIMESTAMP, $${startIndex + 2}, $${startIndex + 3})`);
        params.push(idExercise, exerciseLog.duration_seconds, exerciseLog.question, exerciseLog.answer);
      });

      const sql = `INSERT INTO public.exercise_logs (exercise_id, duration_seconds, created_at, question, answer) VALUES ${valuesPlaceholder.join(', ')};`;
      
      const result = await connect.query(sql, params);
      if (result.rowCount > 0) {
        return "success insert exercise_logs" ;
       } else {
        return "Failed to insert the excercise_logs" ;
      }
    }

    async function deleteExercise(idExercise) {
      const connect = await dbs();
      const sqlExercises = `DELETE FROM public.exercises WHERE exercise_id= $1; `;
      const sqlExercisesLogs = `DELETE FROM public.exercise_logs WHERE exercise_id= $1;`;
      
      const params = [idExercise];
      const resultExerciseLogs = await connect.query(sqlExercisesLogs, params);
      const resultExercise = await connect.query(sqlExercises, params);

      if (resultExercise.rowCount > 0 || resultExerciseLogs > 0) {
        return "success deleted exercise" ;
       } else {
        return "Failed to insert the excercise_logs" ;
      }
    }

  };
  
  module.exports = exercise;
  
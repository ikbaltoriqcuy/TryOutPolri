import getHeaders from "./header";
import { ApiResponse, ApiResponseError} from "./response";
import { BASE_URL_API } from "../Config"

export interface ExerciseLog {
  log_id: number,
  duration_seconds: number;
  question: string;
  answer: string;
  total_answer: number,
  total_correct: number,
  total_incorrect: number
}

export interface Exercise {
  exercise_id: number;
  exercise_name: string;
  description: string;
  category_id: number;
  created_at: string; 
  user_id: number;
}

export interface ExerciseResponse {
    totalExercises: number, 
    totalPages: number,
    exercises: Exercise[];
}

export async function addExercise(exerciseName: string, items: string[], email: string) {
    const exerciseData = {
      exercise: {
        exercise_name: exerciseName,
        description: "test kecermatan",
        category_id: 6,
        email: email
      },
      exercise_logs: items.map((item, index) => ({
        duration_seconds: 60,
        question: item,
        answer: "N/A", 
      })),
    };
  
    try {
      const response = await fetch(BASE_URL_API + "/api/add-exercise-logs", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(exerciseData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const data = await response.json();
      console.log("Data submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  
  export async function getAllExercises(page: number = 1, email: string): Promise<ApiResponse<ExerciseResponse>> {
    const requestData = { page: page, email: email };

    const response = await fetch(BASE_URL_API + "/api/get-excercise", {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data: ApiResponse<ExerciseResponse> = await response.json();
    return data
}


export async function getExercisesLogs(id: number = 1): Promise<ApiResponse<ExerciseLog[]>> {
  const requestData = { id_exercise: id };

  const response = await fetch(BASE_URL_API + "/api/get-excercise-logs", {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(requestData),
  });

  if (!response.ok) {
      const errorData: ApiResponseError = await response.json();
      throw errorData;
  }

  const data: ApiResponse<ExerciseLog[]> = await response.json();
  return data
}

export async function updateExerciseLogs(answerSymbol: { id_logs: number, totalAnswer: number, totalCorrect: number, totalIncorrect: number }[]): Promise<ApiResponse<string>> {
  const requestData = { answerSymbol: answerSymbol };

  const response = await fetch(BASE_URL_API + "/api/update-excercise-logs", {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    const errorData: ApiResponseError = await response.json();
    throw errorData;
  }

  const data: ApiResponse<string> = await response.json();
  return data;
}

export async function deleteExercise(id_exercise: number) {
  const requestData = {  id_exercise: id_exercise};

  const response = await fetch(BASE_URL_API + "/api/delete-exercise", {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    const errorData: ApiResponseError = await response.json();
    throw errorData;
  }

  const data: ApiResponse<string> = await response.json();
  return data;
}


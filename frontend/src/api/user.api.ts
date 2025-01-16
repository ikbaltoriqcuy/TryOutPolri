import getHeaders from "./header";
import { ApiResponse, ApiResponseError} from "./response";
import { BASE_URL_API } from "../Config"

export interface UserUpdateData {
    name: string;
    place_birth : string;
    date_birth : string;
    address : string;
    city : string;
    province :  string;
    subdistrict : string;
    email : string;         
    packet_id : number; 
    phone: string;
    username: string;
}

export interface UserUpdatePassword {
    email: string,
    currentPassword: string;
    newPassword : string;
}

export interface UserData {
    user_id: number,
    name: string;
    place_birth : string;
    date_birth : string;
    address : string;
    city : string;
    province :  string;
    subdistrict : string;
    password : string;
    email : string;         
    packet_id : number; 
    phone: string;
    username: string;
    price: number,
    current_quota: number,
    date_purchase: string
}

export interface LoginData {
    email: string;
    password: string;
}

export async function  register<T>(body: UserData): Promise<ApiResponse<T>> {
    const response  = await fetch(BASE_URL_API + '/api/register', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

export async function  updatePassword<T>(body: UserUpdatePassword): Promise<ApiResponse<T>> {
    const response  = await fetch(BASE_URL_API + '/api/change-password', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

export async function  updateData<T>(body: UserUpdateData): Promise<ApiResponse<T>> {
    const response  = await fetch(BASE_URL_API + '/api/update-user', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

export async function login(body: LoginData): Promise<ApiResponse<UserData>> {
    const response  = await fetch(BASE_URL_API + '/api/login', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data: ApiResponse<UserData> = await response.json();
    return data;
}
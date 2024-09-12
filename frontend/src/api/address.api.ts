import getHeaders from "./header";
import {ApiResponse, ApiResponseError} from "./response";
import { BASE_URL_API } from "../Config"

export interface Province {id: string , name: string}
export interface City {id: string , name: string}
export interface SubDistrict {id: string , name: string}

export async function  getProvince(): Promise<ApiResponse<Province[]>> {
    const response  = await fetch(BASE_URL_API +'/api/province', {
        method: 'GET',
        headers: getHeaders()
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

export async function getCity(provinceId: string): Promise<ApiResponse<City[]>> {
    const body = {
        provinceId: provinceId
    }
    const raw = JSON.stringify(body)
    const response  = await fetch(BASE_URL_API + '/api/city', {
        method: 'POST',
        headers: getHeaders(),
        body: raw,
        redirect: "follow"
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

export async function  getSubdistrict(provinceId: string, cityId: string): Promise<ApiResponse<SubDistrict[]>> {
    const body = {
        provinceId: provinceId,
        cityId: cityId
    }
    const response  = await fetch(BASE_URL_API + '/api/subdistrict', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data = await response.json();
    return data;
}

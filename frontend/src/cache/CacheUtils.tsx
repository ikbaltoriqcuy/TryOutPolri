import { UserData } from "../api/user.api";

interface CacheUtils {
    data: UserData,
    expiry: number
}


export const CACHE_KEY = "CACHE_KEY";

export const setCache = (key: string, user: UserData, ttl: number) => {
    const now = new Date().getTime();
    const item: CacheUtils = {
        data: user,
        expiry: now + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const updateCache = (key: string, user: UserData) => {
    const item: CacheUtils = {
        data: user,
        expiry: getCurrentExpiry("CACHE_KEY")
    };
    localStorage.setItem(key, JSON.stringify(item));
};


export const getCurrentExpiry = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return -1;
    }
    const item: CacheUtils = JSON.parse(itemStr);
    return item.expiry
}

export const getCache = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item: CacheUtils = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.data;
};

export const removeCache = (key: string) => {
    localStorage.removeItem(key);
};

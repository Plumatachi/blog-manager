export const saveToLocalStorage = <T>(key: string, value: T): boolean => {
    try {
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);
        return true;
    } catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
        return false;
    }
};

export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

export const removeFromLocalStorage = (key: string): boolean => {
    try {
        window.localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error(`Error removing ${key} from localStorage:`, error);
        return false;
    }
};

export const clearLocalStorage = (): boolean => {
    try {
        window.localStorage.clear();
        return true;
    } catch (error) {
        console.error('Error clearing localStorage:', error);
        return false;
    }
};

export const existsInLocalStorage = (key: string): boolean => {
    try {
        return window.localStorage.getItem(key) !== null;
    } catch (error) {
        console.error(`Error checking ${key} in localStorage:`, error);
        return false;
    }
};
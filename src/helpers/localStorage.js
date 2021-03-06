export const getData = (key) => {
    if (!localStorage) return;
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(`Error getting item ${key} from localStorage`, err);
    }
};

export const storeData = (key, item) => {
    if (!localStorage) return;
    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.log(`Error storing item ${key} in localStorage`, err);
    }
};

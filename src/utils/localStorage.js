// 로컬 스토리지 기간 체크
export const getExpiry = (key) => {
    const now = new Date();
    const getStorage = localStorage.getItem(key);

    if (!getStorage) return null;

    const item = JSON.parse(getStorage);

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        item.status = true;
        return item;
    }

    return item;
};

export const localStorageService = {
  setElem: (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getElem: (key: string) => localStorage.getItem(key) as string,
};

class LocalStorageService {
  private setElem(key: string, newData:any) {
    localStorage.setItem(key, JSON.stringify(newData));
  }

  private getElem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  private removeElem(key: string) {
    localStorage.removeItem(key);
  }

  public setToken(data:any) {
    this.setElem("token", data);
  }

  public getToken() {
    return this.getElem("token");
  }

  public removeToken() {
    this.removeElem("token");
  }
}
const SERVISE = new LocalStorageService();
export default SERVISE;

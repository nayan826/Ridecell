import { reaction, makeAutoObservable } from "mobx";

export default class commonStore {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

   token = window.localStorage.getItem("jwt");
   appLoaded = false;

   setToken = (token) => {
    this.token = token;
  };

   setAppLoaded = () => {
    this.appLoaded = true;
  };
}

import UserStore from "./userStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";

configure({ enforceActions: "always" });

export class RootStore {
  userStore;
  commonStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootContextStore = createContext(new RootStore());

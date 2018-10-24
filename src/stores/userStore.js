import { observable, action, when } from "mobx";

class UserStore {
  @observable
  currentUser;
  @observable
  loadingUser = false;
  @observable
  updatingUser;
  @observable
  updatingUserErrors;

  watcher = when(() => this.loadingUser, () => console.log("user is loading"));
  
  @action
  pullUser() {
    this.loadingUser = true;
    setTimeout(() => (this.loadingUser = false), 2000);
  }
}

export default new UserStore();

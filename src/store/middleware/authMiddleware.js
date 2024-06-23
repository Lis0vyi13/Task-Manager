import { v4 as uuidv4 } from "uuid";

import { authActions } from "../slices/auth.slice";
import { userActions } from "../slices/user.slice";

import { summary, userTemplate } from "@/constants";

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === authActions.logIn.type) {
    const userInfo = action.payload;
    const user = summary.users.find(
      (user) => user.email === userInfo.email,
    ) || { ...userTemplate, ...userInfo, _id: uuidv4() };

    localStorage.setItem("user", JSON.stringify(user));
    store.dispatch(userActions.setUser(user));
  }

  if (action.type === authActions.logOut.type) {
    localStorage.removeItem("user");
    store.dispatch(userActions.clearUser());
  }

  return next(action);
};

export default authMiddleware;

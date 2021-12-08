const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER = "SET_USER_NAME";

interface UserState {
  userName: string;
  isLogged: boolean;
}

interface SetUserNameAction {
  type: typeof SET_USER_NAME;
  payload: string;
}

type UserAction = SetUserNameAction;

const defaultState: UserState = {
  userName: "user",
  isLogged: false,
};

export const userReducer = (state = defaultState, action: UserAction): UserState => {
  switch (action.type) {
    case SET_USER_NAME:
      return { userName: action.payload, isLogged: true };
    default:
      return state;
  }
};

export const setUserName = (userName: string) => ({ type: SET_USER_NAME, payload: userName });

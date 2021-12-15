const SET_USER_NAME = "SET_USER_NAME";

interface UserState {
  userName?: string;
  email?: string;
  id?: number;
  description?: string;
  isLogged?: boolean;
  password?: string;
}

interface SetUserNameAction {
  type: typeof SET_USER_NAME;
  payload: UserState;
}

type UserAction = SetUserNameAction;

const defaultState: UserState = {
  userName: "user",
  email: "email",
  id: 0,
  description: "description",
  isLogged: false,
  password: "password",
};

export const userReducer = (state = defaultState, action: UserAction): UserState => {
  const user = action.payload;

  switch (action.type) {
    case SET_USER_NAME:
      return {
        userName: user.userName,
        email: user.email,
        isLogged: true,
        id: user.id,
        description: user.description,
        password: user.password,
      };
    default:
      return state;
  }
};

export const setUserName = (user: UserState): SetUserNameAction => ({ type: SET_USER_NAME, payload: user });

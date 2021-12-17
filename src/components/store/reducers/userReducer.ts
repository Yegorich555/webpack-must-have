const SET_USER = "SET_USER";

interface UserState {
  userName?: string;
  email?: string;
  id?: number;
  description?: string;
  isLogged?: boolean;
  password?: string;
  image?: string;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: UserState;
}

type UserAction = SetUserAction;

const defaultState: UserState = {
  userName: "user",
  email: "email",
  id: 0,
  description: "description",
  isLogged: false,
  password: "password",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png",
};

export const userReducer = (state = defaultState, action: UserAction): UserState => {
  const user = action.payload;

  switch (action.type) {
    case SET_USER:
      return {
        userName: user.userName,
        email: user.email,
        isLogged: true,
        id: user.id,
        description: user.description,
        password: user.password,
        image: user.image,
      };
    default:
      return state;
  }
};

export const setUser = (user: UserState): SetUserAction => ({ type: SET_USER, payload: user });

import { Route, Redirect } from "react-router-dom";

type RouterPrivate = {
  component: any;
  auth: boolean;
  path: string;
};
const PrivateRoute = function ({ component: Component, auth, ...rest }: RouterPrivate) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? (
          <Redirect to={{ pathname: "/", state: { from: props.location, show: true } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;

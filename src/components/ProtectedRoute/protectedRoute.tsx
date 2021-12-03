import { Route, Redirect as Navigate, RouteProps } from "react-router-dom";

interface ProtectedProps extends RouteProps {
  loggedUser: boolean;
  component: React.ComponentType<unknown>;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ component: Component, loggedUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!loggedUser) {
        return <Component {...rest} {...props} />;
      }
      return (
        <Navigate
          to={{
            pathname: "/home",
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

export default ProtectedRoute;

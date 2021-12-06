import { Route, RouteProps, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../routes/provider";

interface ProtectedProps extends RouteProps {
  component: React.ComponentType<unknown>;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ component: Component, ...rest }) => {
  const { loggedUser } = useContext(UsersContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedUser) {
          return <Component {...rest} {...props} />;
        }
        return (
          <Redirect
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
};

export default ProtectedRoute;

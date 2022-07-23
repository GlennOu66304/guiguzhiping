import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const user = useSelector((state) => state.user);
  // console.log(user)
  const isLogin = user.token ? true : false;
  return isLogin ? (
    <Route
      path={props.path}
      render={() => <props.component></props.component>}
    ></Route>
  ) : (
    <Redirect to="/login" />
  );
}
export default PrivateRoute;

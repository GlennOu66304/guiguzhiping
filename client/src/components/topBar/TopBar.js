import "./topBar.css";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";
import { logOut } from "../../redux/auth/slice";
import { useSelector, useDispatch } from "react-redux";
export default function TopBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLogin = user.token ? true : false;

  const history = useHistory();
  const logout = () => {
    dispatch(logOut());
  };

  return isLogin ? (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        {/* logout */}
        <span onClick={logout} className="logout">
          <FaUserAlt /> Logout
        </span>
      </div>
    </div>
  ) : (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        {/* login */}
        {/* <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <span>
            <FaSignInAlt /> Login
          </span>
        </Link> */}

        <span onClick={() => history.push("/login")}>
          <FaSignInAlt /> Login
        </span>

        {/* register */}
        {/* <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <span>
            <FaUserAlt /> Register
          </span>
        </Link> */}
        <span 
          onClick={() => {
            history.push("./register");
          }}
        >
          <FaUserAlt /> Register
        </span>
      </div>
    </div>
  );
}

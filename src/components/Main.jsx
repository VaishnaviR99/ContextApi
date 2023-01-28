import { useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import ctx  from "./mycontext";

function Main(props) {
  const { isLoggedIn } = useContext(ctx);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Main;
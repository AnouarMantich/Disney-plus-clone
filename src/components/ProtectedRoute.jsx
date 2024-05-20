import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  // 1. Load the authenticated user
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  // 2. If there is No authenticated user , redirect to the /login
  useEffect(() => {
    if (!userName) navigate("/");
  }, [userName, navigate]);

  // 4. If there is a user , render the app

  if (userName) return children;
};

export default ProtectedRoute;

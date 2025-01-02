import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();

  function logout() {
    try {
      localStorage.removeItem("user");
      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return logout;
}

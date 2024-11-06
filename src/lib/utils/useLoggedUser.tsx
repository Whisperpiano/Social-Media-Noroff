import { useEffect, useState } from "react";

interface LocalStorageType {
  accessToken: string;
  name: string;
}

export default function useLoggedUser() {
  const [accessToken, setAccessToken] = useState<string>("");
  const [loggedUser, setLoggedUser] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user: LocalStorageType = JSON.parse(storedUser);
      setAccessToken(user.accessToken);
      setLoggedUser(user.name);
    }
  }, []);

  return {
    accessToken,
    loggedUser,
  };
}

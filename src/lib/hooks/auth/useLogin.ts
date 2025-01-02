import { useState } from "react";

const API_URL = "https://v2.api.noroff.dev/auth/login";

export default function useLogin() {
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors[0].message);
      }

      const { data } = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        setFetchError(error.message);
      } else {
        setFetchError("An unexpected error ocurred");
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, fetchError };
}

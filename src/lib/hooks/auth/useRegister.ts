import { useState } from "react";

const API_URL = "https://v2.api.noroff.dev/auth/register";

export function useRegister() {
  const [fetchError, setFetchError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
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

  return { register, fetchError, isLoading };
}

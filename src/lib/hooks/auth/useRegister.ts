import { useState } from "react";

const API_URL = "https://v2.api.noroff.dev/auth/register";
// const API_KEY = "b58ae560-67eb-499f-b95c-97188b151f34"
// const IMGUR_CLIENT_ID="a0af399aae11d62"

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

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const apiKey = import.meta.env.VITE_API_KEY;

export async function follow(nickname: string, accessToken: string) {
  try {
    const response = await fetch(`${API_URL}/${nickname}/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.errors[0].message);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

type Action = "follow" | "unfollow";

const API_URL = "https://v2.api.noroff.dev/social/profiles";

export async function useToggleFollow(
  nickname: string,
  action: Action,
  accessToken: string,
) {
  try {
    const response = await fetch(`${API_URL}/${nickname}/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
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

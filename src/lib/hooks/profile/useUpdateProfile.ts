import { Media, UserProfileResponse } from "../../types";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const apiKey = import.meta.env.VITE_API_KEY;

export default async function updateProfile(
  user: UserProfileResponse,
  accessToken: string,
  {
    bio,
    avatar,
    banner,
  }: {
    bio: string;
    avatar: Media;
    banner: Media;
  },
) {
  try {
    const response = await fetch(`${API_URL}/${user.name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        bio,
        avatar,
        banner,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.ok;
  } catch (error) {
    console.error(error);
    return error;
  }
}

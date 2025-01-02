const API_URL_POSTS = "https://v2.api.noroff.dev/social/posts";

const apiKey = import.meta.env.VITE_API_KEY;

export default async function createPost(
  accessToken: string,
  {
    title,
    body,
    media,
  }: { title: string; body: string; media?: { url: string; alt: string } },
) {
  try {
    const response = await fetch(`${API_URL_POSTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        title,
        body,
        media,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.errors[0].message);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

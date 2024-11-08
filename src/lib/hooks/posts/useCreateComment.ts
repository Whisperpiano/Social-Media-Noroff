const API_URL_POSTS = "https://v2.api.noroff.dev/social/posts";

export default async function createComment(
  postId: number,
  accessToken: string,
  body: string,
) {
  try {
    const response = await fetch(`${API_URL_POSTS}/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        body,
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

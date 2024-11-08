const API_URL_POSTS = "https://v2.api.noroff.dev/social/posts";

export async function deletePost(id: number) {
  const user = localStorage.getItem("user");
  if (!user) return;
  const accessToken = JSON.parse(user)?.accessToken;
  try {
    const response = await fetch(`${API_URL_POSTS}/${id}`, {
      method: "DELETE",
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
    console.log("deleted post");
    return response.ok;
  } catch (error) {
    console.log(error);
  }
}

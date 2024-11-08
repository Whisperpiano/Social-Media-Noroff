import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "../ui/Badge";
import UserProfile from "../userPanel/UserProfile";
import PostFooter from "./PostFooter";
import MainPostFooter from "./MainPostFooter";
import { PostsResponse } from "../../lib/types";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import { useEffect, useState } from "react";
import { deletePost } from "../../lib/hooks/posts/deletePost";

interface PostCardProps {
  post: PostsResponse;
  isMainPost: boolean;
  isUserLoggedPost: boolean;
  toggleFollowing: (nickname: string) => void;
  isFollowing: boolean;
}

export default function PostCard({
  post,
  isMainPost,
  isUserLoggedPost,
  toggleFollowing,
  isFollowing,
}: PostCardProps) {
  const [actualPost, setActualPost] = useState<PostsResponse | null>(post);
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedUser } = useLoggedUser();

  useEffect(() => {
    setActualPost(post);
  }, [post]);

  function handleDeletePost() {
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (!actualPost?.id || !confirmation) return;
    try {
      deletePost(actualPost.id);
      setActualPost(null);
    } catch (error) {
      console.log(error);
    } finally {
      if (!location.pathname.includes("/profile")) {
        navigate("/home");
      }
    }
  }

  const loggedUserLiked =
    actualPost?.reactions?.[0]?.reactors?.includes(loggedUser) || false;

  if (!actualPost) return null;

  return (
    <>
      <article className="border-b border-tertiary-500">
        <section className="flex flex-col gap-5 p-5">
          <UserProfile
            isUserPanel={false}
            isMainUser={isUserLoggedPost}
            nickname={actualPost?.author.name || ""}
            avatar={actualPost?.author.avatar}
            toggleFollowing={toggleFollowing}
            isFollowing={isFollowing}
            isComment={false}
            postId={actualPost?.id}
            onDelete={handleDeletePost}
          />

          {location.pathname !== `/post/${post.id}` ? (
            <Link to={`/post/${post.id}`}>
              <p className="overflow-wrap-anywhere text-sm font-normal text-tertiary-50 lg:text-base">
                {actualPost?.body}
              </p>
            </Link>
          ) : (
            <p className="overflow-wrap-anywhere text-sm font-normal text-tertiary-50 lg:text-base">
              {actualPost?.body}
            </p>
          )}

          {post.media?.url && (
            <img
              src={post.media.url}
              alt="placeholder"
              className="w-full rounded-lg object-cover object-center"
            />
          )}

          {post.tags[0] !== "" && (
            <div className="flex flex-wrap gap-2.5">
              {post.tags.map(
                (tag) => tag !== "" && <Badge text={tag} key={tag} />,
              )}
            </div>
          )}

          {!isMainPost && (
            <PostFooter
              count={post._count}
              created={post.created}
              id={post.id}
              userLiked={loggedUserLiked}
              isUserLoggedPost={isUserLoggedPost}
            />
          )}
        </section>
        {isMainPost && (
          <MainPostFooter
            count={post._count}
            created={post.created}
            updated={post.updated}
            id={post.id}
            userLiked={loggedUserLiked}
            isUserLoggedPost={isUserLoggedPost}
          />
        )}
      </article>
    </>
  );
}

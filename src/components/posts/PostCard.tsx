import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import UserProfile from "../userPanel/UserProfile";
import PostFooter from "./PostFooter";
import MainPostFooter from "./MainPostFooter";
import { PostsResponse } from "../../lib/types";

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
  return (
    <>
      <article className="border-b border-tertiary-500">
        <section className="flex flex-col gap-5 p-5">
          <UserProfile
            isUserPanel={false}
            isMainUser={isUserLoggedPost}
            nickname={post.author.name}
            avatar={post.author.avatar}
            toggleFollowing={toggleFollowing}
            isFollowing={isFollowing}
          />
          <Link to={`/post/${post.id}`}>
            <p className="overflow-wrap-anywhere text-sm font-normal text-tertiary-50 lg:text-base">
              {post.body}
            </p>
          </Link>

          {post.media?.url && (
            <img
              src={post.media.url}
              alt="placeholder"
              className="w-full rounded-lg object-cover object-center"
            />
          )}

          {post.tags[0] !== "" && (
            <div className="flex gap-2.5">
              {post.tags.map(
                (tag) => tag !== "" && <Badge text={tag} key={tag} />,
              )}
            </div>
          )}

          {!isMainPost && (
            <PostFooter count={post._count} created={post.created} />
          )}
        </section>
        {isMainPost && <MainPostFooter />}
      </article>
    </>
  );
}

import { useEffect } from "react";
import PostCard from "../components/posts/PostCard";
import Header from "../components/ui/Header";
import useReadPostById from "../lib/hooks/posts/useReadPostById";
import useMainProfile from "../lib/hooks/profile/useMainProfile";
import CommentCard from "../components/posts/CommentCard";
import { CommentResponse } from "../lib/types";

export default function SinglePost() {
  const { post, isUserLoggedPost, comments, loggedUser } = useReadPostById();
  const { isFollowingList, toggleFollowing } = useMainProfile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header text="Post"></Header>
      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        {post && (
          <PostCard
            post={post}
            isMainPost={true}
            isUserLoggedPost={isUserLoggedPost ? true : false}
            toggleFollowing={toggleFollowing}
            isFollowing={isFollowingList.includes(post.author.name)}
          />
        )}
        <article>
          {comments.length > 0 &&
            comments.map((comment: CommentResponse) => {
              const isUserLoggedComment = comment.author.name === loggedUser;

              return (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  isUserLoggedComment={isUserLoggedComment}
                  toggleFollowing={toggleFollowing}
                  isFollowing={isFollowingList.includes(comment.author.name)}
                />
              );
            })}
        </article>
      </section>
    </section>
  );
}

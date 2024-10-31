import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import UserProfile from "../userPanel/UserProfile";
import PostFooter from "./PostFooter";
import MainPostFooter from "./MainPostFooter";

interface PostCardProps {
  image?: boolean;
  isMainPost?: boolean;
}

export default function PostCard({
  image = false,
  isMainPost = false,
}: PostCardProps) {
  const id = Math.floor(Math.random() * 100);
  return (
    <>
      <article className="border-b border-tertiary-500">
        <section className="flex flex-col gap-5 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
          <Link to={`/post/${id}`}>
            <p className="text-pretty text-sm font-normal text-tertiary-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus vestibulum mi vel ullamcorper. Nulla facilisi. Vestibulum
              eros ante, tincidunt ac tempor in, molestie ac sem. Curabitur
              pharetra lacus et dui pharetra, id sollicitudin urna maximus.
              Etiam nunc turpis, egestas venenatis lectus non, venenatis
              fringilla felis. Etiam et rhoncus sapien. Sed eu dictum justo, non
              porttitor orci. Duis sit amet tincidunt tellus. Cras tempus nibh
              eget ligula interdum lacinia.
            </p>
          </Link>

          {image && (
            <img
              src={"/placeholder_horizontal.jpg"}
              alt="placeholder"
              className="w-full rounded-lg object-cover object-center"
            />
          )}

          <div className="flex gap-2.5">
            <Badge text="react" />
            <Badge text="react" />
            <Badge text="react" />
          </div>

          {!isMainPost && <PostFooter />}
        </section>
        {isMainPost && <MainPostFooter />}
      </article>
    </>
  );
}

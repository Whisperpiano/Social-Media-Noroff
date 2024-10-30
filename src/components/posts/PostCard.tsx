import Badge from "../ui/Badge";
import Divider from "../ui/Divider";
import UserProfile from "../userPanel/UserProfile";
import PostFooter from "./PostFooter";

export default function PostCard() {
  return (
    <>
      <article className="flex flex-col gap-5 p-5">
        <UserProfile />

        <p className="text-pretty text-sm font-normal text-tertiary-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          vestibulum mi vel ullamcorper. Nulla facilisi. Vestibulum eros ante,
          tincidunt ac tempor in, molestie ac sem. Curabitur pharetra lacus et
          dui pharetra, id sollicitudin urna maximus. Etiam nunc turpis, egestas
          venenatis lectus non, venenatis fringilla felis. Etiam et rhoncus
          sapien. Sed eu dictum justo, non porttitor orci. Duis sit amet
          tincidunt tellus. Cras tempus nibh eget ligula interdum lacinia.
        </p>
        <div className="flex gap-2.5">
          <Badge text="react" />
          <Badge text="react" />
          <Badge text="react" />
        </div>

        <PostFooter />
      </article>
      <Divider />
    </>
  );
}

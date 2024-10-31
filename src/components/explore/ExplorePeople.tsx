import Alert from "../ui/Alert";
import UserProfile from "../userPanel/UserProfile";

export default function ExplorePeople() {
  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <div className="p-5">
        <Alert message="Remember to be respectful with other people" />
      </div>
      <section>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
      </section>
    </section>
  );
}

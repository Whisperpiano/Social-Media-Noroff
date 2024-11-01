import EditOptions from "../components/profile/EditOptions";
import Header from "../components/ui/Header";

export default function ProfileEdit() {
  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header text="Edit profile"></Header>
      <EditOptions />
    </section>
  );
}

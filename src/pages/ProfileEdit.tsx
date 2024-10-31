import EditOptions from "../components/profile/EditOptions";
import Header from "../components/ui/Header";

export default function ProfileEdit() {
  return (
    <section className="relative flex w-full max-w-[600px] flex-col rounded-t-lg">
      <Header text="Edit profile"></Header>
      <EditOptions />
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Profile Page</h1>
      <Link to="edit">Edit Profile</Link>
    </>
  );
}

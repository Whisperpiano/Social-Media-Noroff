import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import UserPanel from "../userPanel/UserPanel";
import MobileHeader from "../MobileHeader";
import { UserProfileResponse } from "../../lib/types";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import { Modal } from "../modal/Modal";

const apiKey = import.meta.env.VITE_API_KEY;

const API_URL = "https://v2.api.noroff.dev/social/profiles";

export default function AppLayout() {
  const [userLoggedProfile, setUserLoggedProfile] =
    useState<UserProfileResponse>();
  const { accessToken, loggedUser } = useLoggedUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!accessToken || !loggedUser) return;

    async function getMainUserProfile() {
      const response = await fetch(
        `${API_URL}/${loggedUser}?_following=true&_followers=true&_posts=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Noroff-API-Key": apiKey,
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors[0].message);
      }
      const { data } = await response.json();
      setUserLoggedProfile(data);
    }

    getMainUserProfile();
  }, [accessToken, loggedUser]);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <main className="relative flex min-h-screen flex-col bg-tertiary-900 font-sans text-tertiary-50">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <MobileHeader
        userProfile={userLoggedProfile}
        onOpenModal={handleOpenModal}
      />
      <div className="sm:flex sm:flex-row xl:min-h-screen xl:justify-center">
        <Navigation />
        <Outlet />
        <UserPanel userProfile={userLoggedProfile} />
      </div>
    </main>
  );
}

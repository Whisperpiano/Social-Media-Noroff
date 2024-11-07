import { useEffect, useState } from "react";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import Alert from "../ui/Alert";
import Divider from "../ui/Divider";
import { useUploadImage } from "../../lib/hooks/media/useUploadImage";
import updateProfile from "../../lib/hooks/profile/useUpdateProfile";
import useLoggedUser from "../../lib/utils/useLoggedUser";

export default function EditOptions() {
  const { userLoggedProfile } = useMainProfile();
  const { accessToken } = useLoggedUser();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const {
    imageLink: avatarLink,
    fetchError: avatarError,
    isUploading: isAvatarUploading,
    isUploadSuccessful: isAvatarUploadSuccessful,
  } = useUploadImage(avatar);
  const {
    imageLink: bannerLink,
    fetchError: bannerError,
    isUploading: isBannerUploading,
    isUploadSuccessful: isBannerUploadSuccessful,
  } = useUploadImage(banner);

  useEffect(() => {
    if (!userLoggedProfile) return;
    setBio(userLoggedProfile?.bio || "");
  }, [userLoggedProfile]);

  function handleChangeBio(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBio(e.target.value);
  }

  function handleChangeAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file?.type)) {
      alert(
        "Please upload a valid image file, only jpeg and png are supported",
      );
      e.target.value = "";
      return;
    }
    setAvatar(file);
  }

  function handleChangeBanner(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file?.type)) {
      alert(
        "Please upload a valid image file, only jpeg and png are supported",
      );
      e.target.value = "";
      return;
    }
    setBanner(file);
  }

  async function onSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    if (isAvatarUploading || isBannerUploading) return;
    try {
      setUpdateError(false);
      setUpdateSuccess(false);
      if (!userLoggedProfile || !accessToken) return;
      await updateProfile(userLoggedProfile, accessToken, {
        bio,
        avatar: {
          url: avatarLink || userLoggedProfile.avatar.url,
          alt: `Avatar of ${userLoggedProfile.name}`,
        },
        banner: {
          url: bannerLink || userLoggedProfile.banner.url,
          alt: `Banner of ${userLoggedProfile.name}`,
        },
      });
      window.location.reload();
      setUpdateSuccess(true);
    } catch (error) {
      console.error("Error updating profile:", error);
      setUpdateError(true);
    }
  }

  return (
    <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
      <div className="p-5">
        {updateSuccess && (
          <div className="mb-5">
            <Alert message={"Changes successfully saved!"} type="success" />
          </div>
        )}
        {updateError && (
          <div className="mb-5">
            <Alert message={"Ops! Something went wrong"} type="error" />
          </div>
        )}

        <p className="text-pretty text-sm font-normal text-tertiary-200 lg:text-base">
          Customize what people see on your public profile and next to your
          posts. Other people are more likely to follow you back and interact
          with you when you have a filled out profile and a profile picture.
        </p>
      </div>
      <div>
        <p className="border-y border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Basic information
        </p>
      </div>
      <form name="profile-edit" onSubmit={onSubmitForm}>
        <div className="p-5">
          <label
            htmlFor="bio"
            className="mb-2 block text-sm font-semibold leading-none text-tertiary-50 lg:text-base"
          >
            Bio
          </label>
          <p className="text-xs text-tertiary-200 lg:text-sm">
            Write what you want to show to the world.
          </p>
          <textarea
            id="bio"
            rows={6}
            className="mt-5 block w-full resize-none rounded-lg border-2 border-tertiary-400 bg-tertiary-500 py-2.5 ps-2.5 text-sm text-tertiary-50 outline-none transition-colors duration-300 placeholder:text-tertiary-200/50 focus:border-secondary-200 lg:text-base"
            placeholder="Write your thoughts here..."
            value={bio}
            onChange={handleChangeBio}
          ></textarea>
        </div>
        <Divider />
        <div className="p-5">
          <label
            htmlFor="avatar"
            className="mb-2 block text-sm font-semibold leading-none text-tertiary-50 lg:text-base"
          >
            Avatar picture
          </label>
          <p className="text-xs text-tertiary-200 lg:text-sm">
            WEBP, PNG, GIF or JPG. At most 2 MB. Will be downscaled to 400x400px
          </p>
          <input
            type="file"
            name="avatar"
            id="avatar"
            className={`mt-5 block w-full rounded-lg text-xs transition-colors duration-300 file:me-2.5 file:border-0 file:bg-transparent file:px-5 file:py-2.5 file:transition-colors file:duration-300 hover:text-tertiary-100 focus:z-10 focus:border-tertiary-200/50 focus:ring-tertiary-200/50 disabled:pointer-events-none disabled:opacity-50 lg:text-sm dark:bg-transparent dark:text-tertiary-200 dark:file:rounded-lg dark:file:bg-tertiary-500 dark:file:text-tertiary-100 dark:file:hover:bg-primary-500 dark:file:hover:text-white ${isAvatarUploadSuccessful === undefined ? "" : isAvatarUploadSuccessful ? "dark:text-success-500 dark:hover:text-success-500" : "dark:text-error-500 dark:hover:text-error-500"}`}
            accept="image/jpeg, image/png"
            onChange={handleChangeAvatar}
            disabled={isAvatarUploading}
          />
          {isAvatarUploadSuccessful && (
            <p className="pt-5 text-sm text-success-500">
              Avatar successfully uploaded!
            </p>
          )}
          {avatarError && (
            <p className="pt-5 text-sm text-error-500">
              {avatarError}, please try again.
            </p>
          )}
        </div>
        <Divider />
        <div className="p-5">
          <label
            htmlFor="banner"
            className="mb-2 block text-sm font-semibold leading-none text-tertiary-50 lg:text-base"
          >
            Banner picture
          </label>
          <p className="text-xs text-tertiary-200 lg:text-sm">
            WEBP, PNG, GIF or JPG. At most 2 MB. Will be downscaled to 400x400px
          </p>
          <input
            type="file"
            name="banner"
            id="banner"
            className={`mt-5 block w-full rounded-lg text-xs transition-colors duration-300 file:me-2.5 file:border-0 file:bg-transparent file:px-5 file:py-2.5 file:transition-colors file:duration-300 hover:text-tertiary-100 focus:z-10 focus:border-tertiary-200/50 focus:ring-tertiary-200/50 disabled:pointer-events-none disabled:opacity-50 lg:text-sm dark:bg-transparent dark:text-tertiary-200 dark:file:rounded-lg dark:file:bg-tertiary-500 dark:file:text-tertiary-100 dark:file:hover:bg-primary-500 dark:file:hover:text-white ${isBannerUploadSuccessful === undefined ? "" : isBannerUploadSuccessful ? "dark:text-success-500 dark:hover:text-success-500" : "dark:text-error-500 dark:hover:text-error-500"}`}
            accept="image/jpeg, image/png"
            onChange={handleChangeBanner}
            disabled={isBannerUploading}
          />
          {isBannerUploadSuccessful && (
            <p className="pt-5 text-sm text-success-500">
              Banner successfully uploaded!
            </p>
          )}
          {bannerError && (
            <p className="pt-5 text-sm text-error-500">
              {avatarError}, please try again.
            </p>
          )}
        </div>

        <div className="mb-20 p-5 sm:mb-0">
          <button
            type="submit"
            className="btn-primary w-full text-sm font-semibold lg:text-base"
            disabled={isAvatarUploading || isBannerUploading}
          >
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
}

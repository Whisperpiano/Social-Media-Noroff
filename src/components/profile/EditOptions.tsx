import { useEffect, useState } from "react";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import Alert from "../ui/Alert";
import Divider from "../ui/Divider";
import { useUploadImage } from "../../lib/hooks/media/useUploadImage";

export default function EditOptions() {
  const { userLoggedProfile } = useMainProfile();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const {
    imageLink: avatarLink,
    fetchError: avatarError,
    isUploading: isAvatarUploading,
  } = useUploadImage(avatar);
  const {
    imageLink: bannerLink,
    fetchError: bannerError,
    isUploading: isBannerUploading,
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
    setAvatar(file);
  }

  function handleChangeBanner(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setBanner(file);
  }

  function onSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    console.log("Bio:", bio);
    console.log("Avatar link:", avatarLink);
    console.log("Banner link:", bannerLink);
  }

  return (
    <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
      <div className="p-5">
        <div className="mb-5">
          <Alert message={"Changes successfully saved!"} type="success" />
        </div>
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
            className="mt-5 block w-full rounded-lg text-xs transition-colors duration-300 file:me-2.5 file:border-0 file:bg-transparent file:px-5 file:py-2.5 file:transition-colors file:duration-300 hover:text-tertiary-100 focus:z-10 focus:border-tertiary-200/50 focus:ring-tertiary-200/50 disabled:pointer-events-none disabled:opacity-50 lg:text-sm dark:bg-transparent dark:text-tertiary-200 dark:file:rounded-lg dark:file:bg-tertiary-500 dark:file:text-tertiary-100 dark:file:hover:bg-primary-500 dark:file:hover:text-white"
            onChange={handleChangeAvatar}
          />
          {isAvatarUploading && <p>Uploading avatar...</p>}
          {avatarLink && <img src={avatarLink} alt="Avatar preview" />}
          {avatarError && <p className="text-red-500">{avatarError}</p>}
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
            className="mt-5 block w-full rounded-lg text-xs transition-colors duration-300 file:me-2.5 file:border-0 file:bg-transparent file:px-5 file:py-2.5 file:transition-colors file:duration-300 hover:text-tertiary-100 focus:z-10 focus:border-tertiary-200/50 focus:ring-tertiary-200/50 disabled:pointer-events-none disabled:opacity-50 lg:text-sm dark:bg-transparent dark:text-tertiary-200 dark:file:rounded-lg dark:file:bg-tertiary-500 dark:file:text-tertiary-100 dark:file:hover:bg-primary-500 dark:file:hover:text-white"
            onChange={handleChangeBanner}
          />
          {isBannerUploading && <p>Uploading banner...</p>}
          {bannerLink && <img src={bannerLink} alt="Banner preview" />}
          {bannerError && <p className="text-red-500">{bannerError}</p>}
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

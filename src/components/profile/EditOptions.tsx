import Alert from "../ui/Alert";
import Divider from "../ui/Divider";

export default function EditOptions() {
  return (
    <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
      <div className="p-5">
        <div className="mb-5">
          <Alert message={"Changes successfully saved!"} />
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
      <form name="profile-edit">
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
          />
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
          />
        </div>

        <div className="p-5">
          <button
            type="submit"
            className="btn-primary w-full text-sm font-semibold lg:text-base"
          >
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
}

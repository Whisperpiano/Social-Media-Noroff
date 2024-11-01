import { PiImageFill, PiGifFill, PiSmileyFill } from "react-icons/pi";

export default function PostEditor() {
  return (
    <form name="post-editor">
      <div className="w-full rounded-lg border border-tertiary-500 bg-tertiary-500">
        <div className="rounded-t-lg p-2.5">
          <label htmlFor="postTextarea" className="sr-only">
            Your post
          </label>
          <textarea
            id="postTextarea"
            rows={4}
            className="w-full resize-none border-0 bg-inherit px-0 text-sm placeholder:text-tertiary-200/50 focus-within:ring-0 focus:outline-none focus:ring-0 lg:text-base"
            placeholder="What are you thinking?"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between border-t border-tertiary-300 p-2.5">
          <div className="flex">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
            >
              <PiImageFill size={20} />

              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
            >
              <PiGifFill size={20} />
              <span className="sr-only">Attach gif</span>
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
            >
              <PiSmileyFill size={20} />
              <span className="sr-only">Attach emoji</span>
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-tertiary-200/75">250</span>
            <button type="submit" className="btn-primary text-sm">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

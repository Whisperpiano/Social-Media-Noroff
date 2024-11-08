import { useRef, useState } from "react";
import { PiImageFill, PiGifFill, PiSmileyFill, PiX } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import createPost from "../../lib/hooks/posts/useCreatePost";
import { useUploadImage } from "../../lib/hooks/media/useUploadImage";
import Loader from "../ui/Loader";

export default function PostEditor() {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const { accessToken, loggedUser } = useLoggedUser();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {
    imageLink,
    fetchError,
    isUploading,
    isUploadSuccessful,
    setImageLink,
  } = useUploadImage(image);

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleButtonImageClick() {
    imageInputRef.current?.click();
  }

  function handleRemoveImage() {
    setImage(null);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
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
    setImage(file);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text.length >= 250) {
      alert("Your post is too long, please limit it to 250 characters");
      return;
    }
    if (!accessToken || isUploading) return;
    try {
      const title = `${loggedUser}'s post`;
      if (!imageLink) {
        const data = await createPost(accessToken, {
          title,
          body: text,
        });
        navigate(`/post/${data.id}`);
        setText("");
        setImage(null);
        setImageLink(null);
        return;
      } else {
        const data = await createPost(accessToken, {
          title,
          body: text,
          media: {
            url: imageLink || "",
            alt: "",
          },
        });
        navigate(`/post/${data.id}`);
        setText("");
        setImage(null);
        setImageLink(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form name="post-editor" onSubmit={handleSubmit}>
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
            value={text}
            onChange={handleTextChange}
            required
          ></textarea>
        </div>
        {isUploading && (
          <div className="flex items-center gap-2.5 p-2.5">
            <Loader />
            <p className="text-sm text-tertiary-200">Uploading picture...</p>
          </div>
        )}

        {fetchError && (
          <div className="flex items-center gap-2.5 p-2.5">
            <p className="text-sm text-error-500">{fetchError}</p>
          </div>
        )}

        {image && imageLink && isUploadSuccessful && (
          <div className="relative p-2.5">
            <img
              src={imageLink}
              alt="image"
              className="h-full w-full rounded-lg object-cover"
            />

            <button
              type="button"
              className="5 absolute right-5 top-5 z-20 rounded-full bg-tertiary-500 p-1 drop-shadow-xl hover:bg-tertiary-300"
              onClick={handleRemoveImage}
            >
              <PiX size={16} />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-tertiary-300 p-2.5">
          <div className="flex">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
              onClick={handleButtonImageClick}
            >
              <PiImageFill size={20} />

              <span className="sr-only">Upload image</span>
            </button>
            <input
              type="file"
              ref={imageInputRef}
              accept="image/jpeg, image/png"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              <PiGifFill size={20} />
              <span className="sr-only">Attach gif</span>
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-tertiary-200/75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              <PiSmileyFill size={20} />
              <span className="sr-only">Attach emoji</span>
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <span
              className={`text-sm ${
                text.length >= 250
                  ? "text-error-500"
                  : text.length >= 200
                    ? "text-alert-300"
                    : "text-tertiary-200/75"
              }`}
            >
              {250 - text.length}
            </span>

            <button
              type="submit"
              className="btn-primary text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isUploading}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

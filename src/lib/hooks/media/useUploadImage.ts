import { useEffect, useState } from "react";

const imgurClientId = import.meta.env.VITE_IMGUR_CLIENT_ID;

export function useUploadImage(image: File | null) {
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState<boolean>();

  useEffect(() => {
    async function uploadImage() {
      if (!image) return;
      setIsUploading(true);
      setIsUploadSuccessful(false);

      try {
        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${imgurClientId}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error uploading image");
        }

        const data = await response.json();
        setImageLink(data.data.link);
        setFetchError(null);
        setIsUploadSuccessful(true);
      } catch (error) {
        console.error(error);
        setFetchError("Error uploading image");
        setImageLink(null);
        setIsUploadSuccessful(false);
      } finally {
        setIsUploading(false);
      }
    }

    uploadImage();
  }, [image]);

  return {
    imageLink,
    fetchError,
    isUploading,
    isUploadSuccessful,
    setImageLink,
  };
}

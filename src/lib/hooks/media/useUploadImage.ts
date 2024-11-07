import { useEffect, useState } from "react";

const IMGUR_CLIENT_ID = "a0af399aae11d62";

export function useUploadImage(image: File | null) {
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    async function uploadImage() {
      if (!image) return;
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error uploading image");
        }

        const data = await response.json();
        setImageLink(data.data.link);
        setFetchError(null);
      } catch (error) {
        console.error(error);
        setFetchError("Error uploading image");
        setImageLink(null);
      } finally {
        setIsUploading(false);
      }
    }

    uploadImage();
  }, [image]);

  return { imageLink, fetchError, isUploading };
}

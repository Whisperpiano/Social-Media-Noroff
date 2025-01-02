import { Media } from "../../lib/types";

export default function ProfileBanner({ banner }: { banner: Media }) {
  return (
    <div>
      <img
        src={banner.url}
        alt={banner.alt}
        className="aspect-[3/1] w-full object-cover object-center"
      ></img>
    </div>
  );
}

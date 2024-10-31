interface AvatarProps {
  src: string;
  alt: string;
  indicator: boolean;
}

export default function Avatar({ src, alt, indicator = false }: AvatarProps) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`aspect-square w-full rounded-lg object-cover object-center`}
      />
      {indicator && (
        <span className="absolute bottom-0 left-10 h-3.5 w-3.5 translate-y-1/4 rounded-full border-2 border-tertiary-900 bg-success-300"></span>
      )}
    </>
  );
}

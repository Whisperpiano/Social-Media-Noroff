export default function NickName({ nickname }: { nickname: string }) {
  return (
    <div className="font-sans">
      <p className="text-sm font-semibold text-tertiary-50 group-hover:underline group-hover:underline-offset-2 lg:text-base">
        {nickname}
      </p>
      <p className="text-sm font-normal tracking-wide text-tertiary-50/50">
        @{nickname}
      </p>
    </div>
  );
}

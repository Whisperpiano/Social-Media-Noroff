export default function NickName({ nickname }: { nickname: string }) {
  return (
    <div className="font-sans">
      <p className="text-base font-semibold text-tertiary-50">{nickname}</p>
      <p className="text-sm font-normal tracking-wide text-tertiary-50/50">
        @{nickname}
      </p>
    </div>
  );
}

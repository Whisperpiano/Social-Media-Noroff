export default function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-lg bg-tertiary-300 px-2.5 py-1 text-xs font-medium text-secondary-200 lg:text-sm">
      #{text}
    </span>
  );
}

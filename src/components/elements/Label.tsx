interface LabelProps {
  children: string;
  idToConnect: string;
}

export default function Label({ children, idToConnect }: LabelProps) {
  return (
    <label
      htmlFor={idToConnect}
      className="text-sm font-normal text-tertiary-50 lg:text-base"
    >
      {children} <span className="text-error-300">*</span>
    </label>
  );
}

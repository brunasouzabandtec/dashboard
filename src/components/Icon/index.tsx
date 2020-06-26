const icons = {
  annotation:
    "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
};

export type Icons = keyof typeof icons;

type Props = {
  className?: string;
  name: Icons;
};

export function Icon(props: Props) {
  const { className, name } = props;

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d={icons[name]} />
    </svg>
  );
}

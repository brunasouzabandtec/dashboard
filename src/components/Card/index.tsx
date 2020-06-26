type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card(props: Props) {
  const { children, className } = props;

  return (
    <div className={`${className} bg-white shadow rounded-lg`}>{children}</div>
  );
}

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container(props: Props) {
  const { children, className } = props;

  return (
    <div className={`${className} max-w-7xl mx-auto px-4 sm:px-8`}>
      {children}
    </div>
  );
}

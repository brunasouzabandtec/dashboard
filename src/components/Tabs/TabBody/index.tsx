type Props = {
  children: React.ReactNode;
  show: boolean;
};

export function TabBody(props: Props) {
  const { children, show } = props;

  return show && <>{children}</>;
}

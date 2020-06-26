type Props = {
  title: string;
  subtitle: string;
};

export function DescriptionHeader(props: Props) {
  const { subtitle, title } = props;

  return (
    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

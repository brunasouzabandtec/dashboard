type Props = {
  label: string;
  value: string;
};

export function DescriptionRow(props: Props) {
  const { value, label } = props;

  return (
    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <span className="text-sm font-medium leading-5 text-gray-500">
        {label}
      </span>
      <p className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
        {value}
      </p>
    </div>
  );
}

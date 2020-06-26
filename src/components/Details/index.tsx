import { Icons } from "src/components/Icon";
import { Card, Icon } from "src/components";

type Props = {
  label: string;
  value: string;
  icon: Icons;
};

export function Details(props: Props) {
  const { label, value, icon } = props;

  return (
    <Card className="flex p-4 space-x-4">
      <div className="flex-shrink-0 p-4 bg-indigo-500 rounded-md">
        <Icon className="w-6 h-6 text-white" name={icon} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium leading-5 text-gray-500 truncate">
          {label}
        </span>
        <span className="text-2xl font-semibold leading-8 text-gray-900">
          {value}
        </span>
      </div>
    </Card>
  );
}

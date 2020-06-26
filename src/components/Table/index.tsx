import clsx from "clsx";

import { Card } from "src/components";

type Props = {
  head: string[];
  body: object[];
  footer?: React.ReactNode;
  onRowClick?: (rowData: any) => void;
};

export function Table(props: Props) {
  const { head, body, footer, onRowClick } = props;

  return (
    <Card className="overflow-auto">
      <table className="min-w-full overflow-auto">
        <thead>
          <tr>
            {head.map((item, i) => {
              return (
                <th
                  key={i}
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {body.map((item, i) => {
            return (
              <tr
                key={i}
                className={clsx(
                  i % 2 === 0 ? "bg-white" : "bg-gray-50",
                  onRowClick ? "cursor-pointer" : "",
                  "hover:bg-gray-100"
                )}
                onClick={onRowClick ? () => onRowClick(item) : () => {}}
              >
                {Object.values(item).map((value, i) => {
                  return (
                    <td
                      key={i}
                      className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {footer}
    </Card>
  );
}

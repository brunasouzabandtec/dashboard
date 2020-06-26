import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

export function TabHead(props: Props) {
  const { children, isSelected, onClick } = props;

  return (
    <div
      className={clsx(
        isSelected
          ? "border-indigo-500 bg-indigo-100 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 hover:bg-gray-200",
        "w-full py-4 px-1 text-center border-b-2 font-medium text-sm leading-5 transition-all duration-150 focus:outline-none"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

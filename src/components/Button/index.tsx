import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  expand?: boolean;
  children: React.ReactNode;
};

export function Button(props: Props) {
  const { children, className, expand, ...rest } = props;

  return (
    <button
      {...rest}
      className={clsx(
        className,
        expand ? "w-full" : "",
        "inline-flex justify-center items-center px-3 py-2 max-w-xs text-center text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
      )}
    >
      {children}
    </button>
  );
}

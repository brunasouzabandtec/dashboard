type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input(props: Props) {
  const { id, label, ...rest } = props;

  return (
    <div className="inline-block w-full relativen sm:max-w-xs">
      <label
        className="block text-sm font-medium leading-5 text-gray-700"
        htmlFor={id || label}
      >
        {label}
      </label>
      <input
        id={id || label}
        className="block w-full py-2 form-input sm:text-sm sm:leading-5"
        {...rest}
      />
    </div>
  );
}

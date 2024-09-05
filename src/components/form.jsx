export const Form = ({ label, name, onChange, value }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 pt-2"
      >
        {label} :
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          value={value}
          id={name}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

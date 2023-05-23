const Inputs = ({ type, label, onChangeFunc, name, id }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 mt-3">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm w-full">
          <input
            type={type || "text"}
            name={name}
            id={id}
            autoComplete="off"
            className="block outline-none px-3 flex-1 border-0 bg-background-white dark:bg-background-black rounded-lg py-1.5 text-main placeholder:text-main sm:text-sm sm:leading-6"
            onChange={(e) => onChangeFunc(e)}
          />
        </div>
      </div>
    </div>
  );
};
const Textarea = ({ label, onChangeFunc, name, id }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 mt-3">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm w-full">
          <textarea
            name={name}
            id={id}
            autoComplete="off"
            className="block resize-none h-28 outline-none px-3 flex-1 border-0 bg-background-white dark:bg-background-black rounded-lg py-1.5 text-main placeholder:text-main sm:text-sm sm:leading-6"
            onChange={(e) => onChangeFunc(e)}
          />
        </div>
      </div>
    </div>
  );
};
export { Inputs, Textarea };

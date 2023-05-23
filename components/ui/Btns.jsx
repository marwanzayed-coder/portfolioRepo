import Link from "next/link";

export const BtnPrimary = ({ href, text, Icon }) => {
  return (
    <div className="btn">
      <Link
        href={href}
        className="border rounded-lg flex items-center justify-center gap-1 border-main px-3 py-1 text-main transition-all duration-300 hover:text-white hover:bg-main"
      >
        {Icon && <Icon />}
        {text}
      </Link>
    </div>
  );
};
export const BtnSecondary = ({ href, text, Icon }) => {
  return (
    <div className="btn">
      <Link
        href={href}
        className="border rounded-lg flex items-center justify-center gap-1 border-main px-3 py-1 hover:text-main transition-all duration-300 text-white bg-main hover:bg-transparent"
      >
        {Icon && <Icon />}
        {text}
      </Link>
    </div>
  );
};
export const BtnForms = ({ text, type }) => {
  return (
    <div className="btn mt-4">
      <button
        type={type || "submit"}
        className="border w-full text-lg rounded-lg flex items-center justify-center gap-1 border-main px-3 py-1 hover:text-main transition-all duration-300 text-white bg-main hover:bg-transparent"
      >
        {text}
      </button>
    </div>
  );
};

const PrimaryButton = ({ text }) => {
  return (
    <button className="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20 duration-300">
      {text}
    </button>
  );
};

export default PrimaryButton;

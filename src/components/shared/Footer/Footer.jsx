const Footer = () => {
  return (
    <div className="bg-bgColor py-6 border-t border-grayText">
      <div className="mx-auto w-10/12 lg:w-9/12 xl:w-8/12 max-w-[1020px] flex flex-col items-center justify-center">
        <div>
          <h1 className="text-xl text-center text-white tracking-widest">
            <span className="text-primaryText">{"<"}</span>Sh
            <span className="text-primaryText">ei</span>kh Saiy
            <span className="text-primaryText">am{"/>"}</span>
          </h1>
          <h1 className="text-lg text-white flex justify-center mt-2 tracking-wide">
            <span className="wavey-typewriter">
              <span className="text-primaryText hidden md:inline">-------</span>
              A Web Developer
              <span className="text-primaryText hidden md:inline">-------</span>
            </span>
          </h1>
        </div>
        {/* copyright */}
        <div className="border-t mt-6 w-full border-grayText" />
        <div>
          <h1 className="text-grayText mt-6">
            © Copyright 2025. Made By Sheikh Saiyam
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

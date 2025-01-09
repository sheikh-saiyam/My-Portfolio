import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/shared/Section/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGithub, FaLink, FaServer } from "react-icons/fa";

const ProjectDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const ProjectDetails = useLoaderData();
  const {
    name,
    image,
    hoverImage,
    Purpose,
    technologies,
    keyFeatures,
    npmPackages,
    githubRepo,
    serverRepo,
    liveLink,
  } = ProjectDetails;
  const sliderImages = [image, hoverImage];
  const sliderSettings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay slides
    autoplaySpeed: 5000, // Autoplay delay
    arrows: true, // Show next/prev arrows
  };
  return (
    <div className="mx-auto w-10/12 lg:w-9/12 xl:w-8/12 max-w-[1020px] py-20">
      <Header header={name} />
      <div className="mt-12">
        {/* image slider div */}
        <div className="text-white">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, index) => (
              <div className="px-2 md:px-4" key={index}>
                <img
                  src={img}
                  alt={`${name} Slide ${index + 1}`}
                  className="rounded-lg w-full h-[250px] md:h-[400px]  lg:h-[500px]"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* image slider div */}

        {/* text div */}
        <div className="mt-6">
          {/* links div */}
          <div className="mx-auto flex flex-col md:flex md:flex-row justify-center mb-7">
            <div>
              <a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-1/2 md:w-full mx-auto items-center gap-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20"
              >
                <FaGithub />
                Github Client Link
              </a>
            </div>
            <div>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-1/2 md:w-full mx-auto items-center gap-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20"
              >
                <FaLink /> Live Link
              </a>
            </div>
            {serverRepo && (
              <div>
                <a
                  href={serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-1/2 md:w-full mx-auto items-center gap-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20"
                >
                  <FaServer />
                  Github Server Link
                </a>
              </div>
            )}
          </div>
          {/* links div */}
          {/* technology div */}
          <div className="border border-grayText">
            <ul className="text-white  py-2 px-4 flex gap-2 items-center justify-center flex-wrap">
              Technology:
              {technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech},</span>
              ))}
            </ul>
          </div>
          {/* technology div */}
          {/* main text div */}
          <div className="border border-grayText border-t-0 py-4 px-8">
            <p className="text-gray-200 mb-4 text-center">
              <span className="font-semibold text-lg text-white">
                Purpose:{" "}
              </span>
              {Purpose}
              ...
            </p>
            {/* features div */}
            <div className="mt-6 px-2">
              <span className="font-semibold text-center text-lg text-white">
                Key Features:{" "}
              </span>
              <ul className="text-gray-200 space-y-4 mt-4">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature},</li>
                ))}
              </ul>
            </div>
            {/* features div */}
          </div>{" "}
          {/* npm packages div */}
          <div className="border border-t-0 border-grayText">
            <ul className="text-white py-2 px-6 flex gap-2 items-center justify-center flex-wrap">
              npm-packages:
              {npmPackages.map((packages, idx) => (
                <span className="text-sm md:text-base" key={idx}>
                  {idx + 1}.{packages},
                </span>
              ))}
            </ul>
          </div>
          {/* npm packages div */}
          {/* main text div */}
        </div>
        {/* text div */}
      </div>
    </div>
  );
};

export default ProjectDetails;

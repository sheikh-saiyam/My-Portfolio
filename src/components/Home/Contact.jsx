/* eslint-disable react/no-unescaped-entities */
import { FaHome, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Header from "../shared/Section/Header";
import { IoSend } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  // email sending functionality
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6j16gi5", "template_de9ly3b", form.current, {
        publicKey: "4XNn_qKV_c36AYTu5",
      })
      .then(
        () => {
          form.current.reset();
          Swal.fire({ title: "Email Sent Successfully", icon: "success" });
        },
        (error) => {
          Swal.fire({ title: `${error.text}`, icon: "error" });
        }
      );
  };
  // email sending functionality
  return (
    <div id="contact" className="pb-20">
      {/* section header */}
      <Header header={"Contact"}></Header>
      {/* main div */}
      <div className="mt-8 flex flex-col md:flex md:flex-row justify-between gap-6 md:gap-2">
        {/* text div */}
        <div className="w-full md:w-5/12">
          <p className="text-grayText tracking-widest">
            ---"If you’re looking for a passionate, dedicated developer to work
            on your next project, feel free to reach out. I’d love to connect
            and explore new opportunities!"---
          </p>

          {/* info div */}
          <div className="border border-grayText py-4 px-2 xl:p-4 mt-6">
            <div className="xl:border-r border-dashed space-y-3">
              <h1 className="text-grayText font-medium text-lg flex items-center gap-2">
                <FaHome /> <span>Dhaka, Bangladesh</span>
              </h1>
              <h1 className="text-grayText font-medium text-lg flex items-center gap-2">
                <IoIosMail />
                <span
                  title="saiyamprogrammer@gmail.com"
                  className="flex xl:hidden"
                >
                  saiyamprogrammer
                  <br />
                  @gmail.com
                </span>
                <span className="hidden xl:flex">
                  saiyamprogrammer@gmail.com
                </span>
              </h1>
              <h1 className="text-grayText font-medium  flex items-center gap-2">
                <FaPhoneAlt />
                <span>Phone: +8801010101101</span>
              </h1>
              <h1 className="text-grayText font-medium text-lg flex items-center gap-2">
                <FaWhatsapp />

                <span>Whatsapp: +8801010101101</span>
              </h1>
            </div>
          </div>
        </div>
        {/* text div */}
        <div className="w-1/12"></div>
        {/* form div */}
        <div className="w-full md:w-6/12">
          <form ref={form} onSubmit={sendEmail}>
            <div className="space-y-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                {/* name */}
                <input
                  type="text"
                  name="from_name"
                  className="md:col-span-2 bg-transparent border-2 outline-none text-gray-200 tracking-widest border-grayText py-2 px-3 w-full"
                  placeholder="Name"
                  required
                />
                {/* email */}
                <input
                  type="email"
                  name="from_email"
                  className="md:col-span-3 bg-transparent border-2 outline-none text-gray-200 tracking-widest border-grayText py-2 px-3 w-full"
                  placeholder="Email"
                  required
                />
              </div>
              {/* title */}
              <input
                type="text"
                name=""
                className="md:col-span-2 bg-transparent border-2 outline-none text-gray-200 tracking-widest border-grayText py-2 px-3 w-full"
                placeholder="Title (optional)"
              />
              {/* message */}
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className=" bg-transparent border-2 outline-none text-gray-200 tracking-widest border-grayText py-2 px-3 w-full"
                required
              />
            </div>
            {/* send button */}
            <div className="mt-3 flex justify-center w-1/2  items-center gap-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20 duration-300">
              <IoSend />
              <button>Send Message</button>
            </div>
          </form>
        </div>
        {/* form div */}

        {/* main div */}
      </div>
    </div>
  );
};

export default Contact;

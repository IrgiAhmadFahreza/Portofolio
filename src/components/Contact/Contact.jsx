import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row justify-around mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex items-center gap-4">
          <AiOutlineMail className="text-3xl text-blue-600" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="whitespace-nowrap">irgifahreza2204@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <AiOutlinePhone className="text-3xl text-blue-600" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p className="whitespace-nowrap">+62 857-1695-4404</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <AiOutlineLinkedin className="text-3xl text-blue-600" />
          <div>
            <h4 className="font-semibold">LinkedIn</h4>
            <a
              href="https://linkedin.com/in/irgiahmadfahreza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline whitespace-nowrap"
            >
              linkedin.com/in/irgi-ahmad-fahreza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

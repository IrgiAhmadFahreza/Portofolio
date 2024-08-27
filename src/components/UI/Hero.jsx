import React from "react";
import heroImg from "../../assets/images/Untitled design.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2 p-2">
            <motion.div
              initial={{ x: "-200px", visibility: "hidden" }}
              animate={{ x: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[16px]"
              >
                Hello Welcome
              </h5>
            </motion.div>

            <motion.div
              initial={{ y: "500px", visibility: "hidden" }}
              animate={{ y: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h1
                data-oas="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px]
                sm:leading-[46px] mt-5"
              >
                I'm Irgi Ahmad Fahreza
                <br />
                Network Engineer
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: "200px", visibility: "hidden" }}
              animate={{ x: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h3
                data-oas="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[12px] leading-[18px] text-justify mt-5"
              >
                I am a graduate of Informatics Engineering from Universitas
                Muhammadiyah Prof. Dr. Hamka. An IT specialist with a strong
                background in network management and practical experience in
                network administration. I possess expertise in network device
                configuration, cybersecurity, and network monitoring using tools
                such as MikroTik and Grafana. Solution-oriented with sharp
                analytical skills and effective communication abilities in both
                Indonesian and English. Committed to supporting team performance
                through reliable technical support and quick problem-solving.
                <br />
              </h3>
            </motion.div>

            <div
              data-oas="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="*#contact">
                <button
                  className="bg-[#4299e1] text-white font-[500] flex items-center gap-2
                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-["
              >
                See Portfolio
              </a>

              <AiOutlineInstagram />
              <AiOutlineLinkedin />
            </div>
          </div>
          <div className="w-full md:basis-1/2 p-2">
            <img class="object-center md:object-top" src={heroImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

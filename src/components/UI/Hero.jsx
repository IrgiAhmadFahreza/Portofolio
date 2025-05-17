import React from "react";  
import heroImg from "../../assets/images/Untitled design.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-0" id="hero">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2 p-2">
            <motion.div
              initial={{ x: "-200px", visibility: "hidden" }}
              animate={{ x: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h3
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-gradient font-extrabold text-[56px] tracking-wide drop-shadow-lg"
                style={{ 
                  background: "linear-gradient(90deg, #06b6d4, #3b82f6)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent" 
                }}
              >
                Hello Welcome
              </h3>
            </motion.div>

            <motion.div
              initial={{ y: "500px", visibility: "hidden" }}
              animate={{ y: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h1
                data-oas="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-extrabold text-[2.2rem] sm:text-[3rem] leading-tight sm:leading-[60px] mt-5 tracking-tight drop-shadow-md"
              >
                I'm Irgi Ahmad Fahreza
                <br />
                <span className="text-cyan-500 font-semibold text-[1.5rem] sm:text-[1.8rem] tracking-widest uppercase drop-shadow-sm">
                  IT Support Staff
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: "200px", visibility: "hidden" }}
              animate={{ x: "0px", visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <h2
                data-oas="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-medium text-[14px] leading-6 text-justify mt-5 max-w-xl"
                style={{ color: "#374151" }}
              >
                IT Support Staff, I am a dedicated and proactive IT Support professional with experience in troubleshooting hardware and software issues, 
                installation, network configuration, and providing direct technical support to users. 
                With strong communication skills and a quick problem-solving approach, 
                I ensure smooth IT system operations to maximize team productivity. 
                Skilled in managing devices, networks, and software, I am always eager to learn new technologies and deliver the best service to support the company’s business goals.
              </h2>
            </motion.div>
          </div>
          <div className="w-full md:basis-1/2 p-2">
            <img className="object-center md:object-top" src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

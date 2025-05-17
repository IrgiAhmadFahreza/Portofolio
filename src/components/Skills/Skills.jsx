import React from "react";
import { FaNetworkWired, FaTools, FaServer, FaBug, FaHeadset } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaNetworkWired className="text-cyan-500 text-4xl" />, name: "Network Management", desc: "MikroTik, IP Tunnel, VPN Setup" },
    { icon: <FaTools className="text-cyan-500 text-4xl" />, name: "Monitoring Tools", desc: "Grafana, Prometheus" },
    { icon: <FaServer className="text-cyan-500 text-4xl" />, name: "NAS Configuration", desc: "Synology NAS Setup & Backup" },
    { icon: <FaBug className="text-cyan-500 text-4xl" />, name: "Troubleshooting", desc: "Hardware & Software Issues" },
    { icon: <FaHeadset className="text-cyan-500 text-4xl" />, name: "User Support", desc: "Technical Support & Communication" },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto p-6 my-20 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border rounded hover:shadow-lg transition-shadow cursor-default">
            <div>{skill.icon}</div>
            <div>
              <h3 className="font-semibold text-xl">{skill.name}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// components/Portfolio/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-4xl mx-auto p-6 mt-16">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">My Projects</h2>

      {/* Project 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-blue-500">
          🌐 IPIP Tunnel & NAS Synology Backup
        </h3>
        <p className="text-gray-700">
          Saya mengimplementasikan koneksi <strong>IPIP Tunnel</strong> antara dua kantor menggunakan router MikroTik untuk menghubungkan jaringan internal. Di kantor pusat terdapat <strong>NAS Synology</strong> yang menerima backup otomatis dari kantor cabang melalui jaringan tunnel tersebut.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Menggunakan MikroTik untuk konfigurasi IPIP dan routing antar kantor.</li>
          <li>NAS Synology di kantor pusat sebagai pusat backup data.</li>
          <li>Transfer data aman dan stabil antar site melalui tunnel.</li>
        </ul>
        <p className="text-sm text-gray-500">Teknologi: MikroTik, NAS Synology, IPIP Tunnel, Static Route, Port Forwarding</p>
      </div>

      {/* Project 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-blue-500">
          📈 Monitoring Jaringan MikroTik dengan Grafana & Prometheus
        </h3>
        <p className="text-gray-700">
          Saya membangun sistem monitoring jaringan menggunakan <strong>Grafana</strong> dan <strong>Prometheus</strong> untuk memantau performa perangkat <strong>MikroTik</strong>. Monitoring ini menampilkan statistik real-time seperti bandwidth usage, CPU load, dan status interface.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Menyiapkan Prometheus sebagai data collector dari MikroTik via SNMP/Exporter.</li>
          <li>Membuat dashboard Grafana untuk visualisasi data performa jaringan.</li>
          <li>Mengatur alerting berdasarkan kondisi jaringan tertentu.</li>
        </ul>
        <p className="text-sm text-gray-500">Teknologi: Grafana, Prometheus, SNMP, MikroTik Exporter</p>
      </div>
    </section>
  );
};

export default Portfolio;

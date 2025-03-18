"use client";
import React from "react";
import SectionTitle from "./UI/SectionTitle";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Summer Region Sdn Bhd, Petaling Jaya",
      role: "Application Developer",
      duration: "June 2023 - Nov 2024",
      description: [
        "Developed and maintained Hospital Information System (HIS), using Java, jQuery, and SQL, ensuring seamless operations.",
        "Integrated label printers using Zebra and Eltron programming languages. (ZPL & EPL)",
        "Led the integration of LHDN e-Invoice module with HIS, delivering it as an individual contributor.",
        "Provided Level 3 support to clients including Cengild G.I. Medical Centre and UTAR Hospital.",
        "Successfully reduced processing time of retrieving records by 60% (30secs –> 5secs) through optimizations.",
      ],
    },
    {
      id: 3,
      company: "Cimation (M) Sdn Bhd, Kuala Lumpur",
      role: "Software Engineer",
      duration: "Aug 202 - June 2023",
      description: [
        "Maintained, supported and developed 6 production systems",
        "Integrated SAP Interface to 2 projects to enhance data synchronization, leading to improved operational efficiency.",
        "Developed and deployed 3 WinForms to clients’ production environment.",
        "Designed and implemented an Android application with RFID integration for Chainway devices, improving asset tracking efficiency.",
        "Experienced in hardware integration (Impinj Speedway Antenna Hub, Atlas Copco/Celco Tightening Controller)",
        "Involved in 2 databases schema design.",
        "Led a team of 2 developers, mentoring and overseeing project progress.",
        "Restructured SQL Queries to improve system performance by 30%",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <SectionTitle>Experiences</SectionTitle>
      {experiences.map((exp, index) => (
        <div key={index} className="card mx-0 mb-5 shadow-2xl" style={{ backgroundColor: "#b5b5b5" }}>
          <div className="flex justify-between">
            <p>{exp.company}</p>
          </div>
          <div className="font-thin text-sm italic">
            <p>{exp.role}</p>
            <p>
              <b>{exp.duration}</b>
            </p>
            {exp.description.map((desc: string, index: number) => (
              <p key={index} className="mt-2">
                • {desc}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

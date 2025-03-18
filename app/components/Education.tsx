"use client";

import SectionTitle from "./UI/SectionTitle";

export default function Education() {
  const education_history = [
    {
      institution: "Universiti Malaya (UM), Kuala Lumpur",
      degree: "Master in Data Science",
      start_date: "Expected Completion: Jan 2026",
      end_date: null,
      gpa: "3.94",
    },
    {
      institution: "Universiti Sains Malaysia (USM), Penang",
      degree: "Bachelor of Computer Science (Honours)",
      start_date: "Sep 2016",
      end_date: "Sep 2020",
      gpa: "3.46",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <SectionTitle>Education</SectionTitle>
      {education_history.map((edu, index) => (
        <div key={index} className="card mx-0 mb-5 shadow-2xl" style={{ backgroundColor: "#b5b5b5" }}>
          <div className="flex justify-between">
            <p>{edu.institution}</p>
            <p>{edu.end_date == null ? edu.start_date : `${edu.start_date} - ${edu.end_date}`}</p>
          </div>
          <div className="font-thin text-sm italic">
            <p>{edu.degree}</p>
            <p>
              CGPA: <b>{edu.gpa}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

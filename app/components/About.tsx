import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex items-center justify-self-center gap-5 w-fit">
        <div className="place-content-center  items-center justify-items-center">
          <Image src="/TCX.jpg" alt="Profile picture" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="notepad w-3xl">
          <div className="title-bar">
            <span>About Me</span>
          </div>
          <div className="menu-bar">
            <a href="#">File</a>
            <a href="#">Edit</a>
            <a href="#">Search</a>
            <a href="#">Help</a>
          </div>
          <div className="content">
          Toh Chu Xian (Marcus) is an Application Developer with expertise in healthcare and automotive systems, currently pursuing a Master’s in Data Science (University of Malaya, expected 2026). He holds a Bachelor’s in Computer Science (USM, CGPA: 3.46). At Summer Region Sdn Bhd (2023-2024), he optimized a Hospital Information System, reducing retrieval times by 60%. At Cimation (2020-2023), he developed production systems and improved performance by 30%. Skilled in C#, Java, SQL, and hardware integration, he’s fluent in English, Malay, and Mandarin, with a proven track record in leadership and technical innovation.
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";

export default function Skills() {
  const skills: any = {
    backend: [
      { name: "C#.NET", icon: "/csharp.svg" },
      { name: "Java", icon: "/java.svg" },
    ],
    frontend: [
      { name: "jQuery", icon: "/jQuery_dark.svg" },
      { name: "React", icon: "/React_dark.svg" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
    ],
    cloud: [{ name: "Amazon Web Services (AWS)", icon: "/aws_dark.svg" }],
    mobile: [{ name: "Android", icon: "/android.svg" }],
  };

  return (
    <div className="max-w-7xl mx-auto w-full ">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex gap-5">
        {Object.keys(skills).map((category) => (
          <div key={category} className="card mx-0 mr-5 shadow-2xl w-2xl" style={{ backgroundColor: "#b5b5b5" }}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="flex flex-wrap gap-5 p-5">
              {skills[category].map((skill: any) => (
                <div key={skill.name} className="flex items-center justify-center">
                  <Image src={skill.icon} alt={skill.name} width={50} height={50} title={skill.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SquareTerminal } from "lucide-react";
import { Fira_Code } from "next/font/google";

const font = Fira_Code({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className=" max-w-5xl mx-auto w-full">
        <div className="p-5 flex item-center justify-between w-full">
          <div className="flex items-center gap-5">
            <SquareTerminal />
            <h1 className={`${font.className} `}>Hello World</h1>
          </div>
          <div className="flex items-center justify-between gap-5">
            <a href="#about" className="nav-item">
              About Me
            </a>
            <a href="#skills" className="nav-item">
              Skills
            </a>
            <a href="#experiences" className="nav-item">
              Experiences
            </a>
            <a href="#education" className="nav-item">
              Education
            </a>
            <Link href="/resume" className="nav-item" rel="noopener noreferrer" target="_blank">
              Resume
            </Link>
            <div>
              <Link href={"https://github.com/chuxian922"} rel="noopener noreferrer" target="_blank">
                <Image src="/Github_dark.svg" width={25} height={25} alt="Github" />
              </Link>
            </div>
            <div>
              <Link href={"https://www.linkedin.com/in/chuxian922/"} rel="noopener noreferrer" target="_blank">
                <Image src="/linkedin.svg" width={25} height={25} alt="Linkedin" />
              </Link>
            </div>
            <div>
              <a href="mailto:tchuxian922@gmail.com">
                <Image src="/mail.svg" width={25} height={25} alt="tchuxian922@gmail.com" />
              </a>
            </div>
            <div>
              {/* <Sun /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <h1>{props.children}</h1>
      <hr />
      <br />
    </>
  );
}

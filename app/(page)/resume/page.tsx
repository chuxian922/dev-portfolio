"use client";
import Header from "@/app/components/Header";
import { pdfjs, Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function Resume() {
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    // setNumPages(numPages);
  // }

  return (
    <>
      <Header />
      <button>Download Resume</button>
      <div className="flex justify-center items-center">
        <Document file="resume.pdf" 
        // onLoadSuccess={onDocumentLoadSuccess}
        >
          {/* <Page pageNumber={pageNumber} /> */}
        </Document>
      </div>
      <button>Download Resume</button>
    </>
  );
}

"use client";

import {
  AvailableDocuments,
  Container,
  ContainerTitle,
  Document,
  SelectedDocuments,
} from "@/components";
import { useState } from "react";

export default function Home() {
  const [selectedDocs, setSelectedDocs] = useState<Document[]>([]);

  return (
    <main className="flex min-h-screen flex-col justify-start p-4 md:p-24 gap-y-6">
      <Container className="p-6">
        <ContainerTitle className="text-xl md:text-lg font-semibold">
          Which agreements, forms and notices should be sent to Jason Smith?
        </ContainerTitle>
        <ContainerTitle className="">
          Employees assigned to this job type will be required to review, where
          relevant fill-in, and sign the following agreements and notices:
        </ContainerTitle>
      </Container>
      <div className="flex flex-col gap-y-2">
        <p className="font-medium">
          Select the agreements, notices and documents you want Jason Smith to
          sign
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
          <AvailableDocuments
            selectedDocs={selectedDocs}
            setSelectedDocs={setSelectedDocs}
          />
          <SelectedDocuments
            selectedDocs={selectedDocs}
            setSelectedDocs={setSelectedDocs}
          />
        </div>
      </div>
    </main>
  );
}

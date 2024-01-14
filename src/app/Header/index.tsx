import { Button, Container, ContainerTitle, Icon } from "@/components";
import { STEPS } from "./constants";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import { cn } from "@/utils";

export function Header() {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <Container className="gap-y-4 md:gap-y-6 px-4 py-3 md:px-6 md:py-5 rounded-none">
      <div className="flex justify-between items-start flex-nowrap">
        <ContainerTitle size="xl">
          Select Agreements, Notices and Other Documents
        </ContainerTitle>
        <Button size="sm" className="text-gray-900" leftIcon={faClose}>
          Save & Close
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {STEPS.map(({ value, label }, index) => {
          const isFirstButton = index === 0;
          const isSelected = currentStep === index;
          const isPreviousStep = index < currentStep;

          return (
            <Fragment key={value}>
              {!isFirstButton && (
                <Icon
                  className="text-sm md:text-base text-gray-400"
                  icon={faArrowRight}
                />
              )}
              <Button
                className={cn(
                  isSelected &&
                    "border-orange-500 bg-orange-50 text-orange-500",
                  isPreviousStep && "text-green-600"
                )}
                onClick={() => setCurrentStep(index)}
                size="md"
              >
                {label}
              </Button>
            </Fragment>
          );
        })}
      </div>
    </Container>
  );
}

import { Icon, IconProps, Accordion as OriginalAccordion } from "@/components";
import { ReactNode } from "react";

type Props = Pick<IconProps, "icon"> & {
  title: string;
  description: string;
  body?: ReactNode;
};

export function Accordion({ icon, title, description, body }: Props) {
  return (
    <OriginalAccordion
      button={
        <div className="flex items-center gap-x-4">
          <Icon className="text-xl text-inherit w-6" icon={icon} />
          <div className="flex flex-col">
            <span className="text-lg font-medium">{title}</span>
            <span className="text-xs">{description}</span>
          </div>
        </div>
      }
      body={<p className="py-5">{body}</p>}
      buttonClassName="py-4 px-2 bg-transparent border-x-0 border-b-0 w-24 text-gray-400 w-full sm:w-96 sm:group-hover:w-full border-t border-gray-700"
      bodyClassName="bg-transparent text-gray-400 text-center"
    />
  );
}

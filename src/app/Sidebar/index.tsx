"use client";

import { Container, Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "./constants";
import { breeFont } from "@/constants";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { faBuilding, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "./Accordion";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Container className="group hidden sm:flex pt-7 pb-4 px-3 bg-sidebar min-w-16 w-16 hover:w-96 transition-all overflow-hidden border-none rounded-none gap-y-7">
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image width={40} height={40} src="/images/logo/48.png" alt="Logo" />
          <span className={cn("text-3xl text-orange-700", breeFont.className)}>
            Mason
          </span>
        </div>
        <hr className="mt-8 border-gray-700" />
      </Link>
      <nav className="flex flex-col gap-y-5">
        {MENU_ITEMS.map(({ id, text, path, icon }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={id}
              href={path}
              className={cn(
                "flex flex-nowrap gap-4 px-0.5 items-center text-gray-400 hover:text-white hover:bg-orange-500 rounded-md transition-colors",
                isActive && "bg-orange-500 text-white"
              )}
            >
              <button className="flex items-center justify-center w-9 aspect-square shrink-0 rounded-md">
                <Icon className="text-inherit text-xl" icon={icon} />
              </button>
              <span className="shrink">{text}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto">
        <div className="pt-4 border-t border-gray-700 absolute bottom-8 group-hover:relative group-hover:bottom-0 group-hover:border-0">
          <Icon
            className="mx-2 block group-hover:hidden text-xl text-gray-400"
            icon={faUserCircle}
          />
        </div>
        <div className="flex group-hover:translate-y-0 w-96 group-hover:w-full translate-y-44 transition-transform flex-col">
          <Accordion
            icon={faBuilding}
            title="AC Electric Co."
            description="Subsidiary • 345 members"
            body="Subsidiary Settings"
          />
          <Accordion
            icon={faUserCircle}
            title="Joseph McFall"
            description="HR Admin View"
            body="Accounts Settings"
          />
        </div>
      </div>
    </Container>
  );
}

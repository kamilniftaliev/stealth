"use client";

import { Container, Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "./constants";
import { breeFont } from "@/constants";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Container className="hidden sm:flex py-7 px-2 bg-sidebar min-w-14 w-14 hover:w-96 transition-all overflow-hidden border-none rounded-none gap-y-7">
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
                "flex flex-nowrap gap-3 px-0.5 items-center text-gray-400 hover:text-white hover:bg-orange-500 rounded-md transition-colors",
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
    </Container>
  );
}

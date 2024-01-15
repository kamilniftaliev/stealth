'use client';

import { Button, Container, Icon } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { MENU_ITEMS } from './constants';
import { breeFont } from '@/constants';
import { cn } from '@/utils';
import { usePathname } from 'next/navigation';
import {
  faBars,
  faBuilding,
  faClose,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Accordion } from './Accordion';
import { useCallback, useMemo, useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);

  const pageTitle = useMemo(
    () => MENU_ITEMS.find(({ path }) => path === pathname)?.text,
    [pathname],
  );

  const closeOnMobile = useCallback(() => setIsOpenOnMobile(false), []);

  return (
    <>
      <div className="flex items-center justify-center relative text-center sm:hidden py-2.5 px-4 border-b bg-sidebar h-top-nav">
        <Button
          onClick={() => setIsOpenOnMobile(true)}
          size="md"
          className="absolute left-4 block sm:hidden rounded-base self-start bg-inherit border-gray-500"
        >
          <Icon icon={faBars} className="text-white" />
        </Button>
        <span className="font-semibold text-white self-center">
          {pageTitle}
        </span>
      </div>
      <Container
        className={cn(
          'absolute h-screen left-0 z-10 group sm:flex pt-7 pb-4 px-3 bg-sidebar sm:min-w-sidebar sm:w-sidebar sm:hover:w-sidebar-open transition-all overflow-hidden border-none rounded-none gap-y-7',
          isOpenOnMobile ? 'fixed flex w-screen' : 'hidden',
        )}
      >
        <Link href="/">
          <div className="flex items-center gap-4 pl-0.5 pr-2 sm:pr-0">
            <Image
              className="shrink-0"
              width={32}
              height={32}
              src="/images/logo/48.png"
              alt="Logo"
            />
            <span
              className={cn('text-3xl text-orange-700', breeFont.className)}
            >
              Mason
            </span>
            <div className="ml-auto sm:hidden">
              <Icon
                onClick={closeOnMobile}
                className="text-3xl text-gray-400"
                icon={faClose}
              />
            </div>
          </div>
          <hr className="mt-8 border-gray-700" />
        </Link>
        <nav className="flex flex-col gap-y-5">
          {MENU_ITEMS.map(({ id, text, path, icon }) => {
            const isCurrentPage = pathname === path;

            return (
              <Link
                key={id}
                href={path}
                className={cn(
                  'flex flex-nowrap gap-4 items-center text-gray-400 hover:text-white hover:bg-primary rounded-md transition-colors',
                  isCurrentPage && 'bg-primary text-white',
                )}
                onClick={closeOnMobile}
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
          <div
            className={cn(
              'pt-4 border-t border-gray-700 absolute bottom-8 sm:group-hover:relative sm:group-hover:bottom-0 sm:group-hover:border-0',
              isOpenOnMobile && '-bottom-14 sm:bottom-8',
            )}
          >
            <Icon
              className={cn(
                'mx-2 hidden sm:block sm:group-hover:hidden text-xl text-gray-400',
              )}
              icon={faUserCircle}
            />
          </div>
          <div
            className={cn(
              'flex sm:group-hover:translate-y-0 sm:w-60 translate-y-44 transition-transform flex-col',
              isOpenOnMobile &&
                'translate-y-0 sm:translate-y-44 w-full sm:w-60',
            )}
          >
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
    </>
  );
}

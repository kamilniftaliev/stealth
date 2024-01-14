import {
  faComments,
  faFolder,
  faGear,
  faHome,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_ITEMS = [
  {
    id: "home",
    path: "/",
    text: "Home",
    icon: faHome,
  },
  {
    id: "people",
    path: "/people",
    text: "People",
    icon: faUserGroup,
  },
  {
    id: "messaging",
    path: "/messaging",
    text: "Messaging",
    icon: faComments,
  },
  {
    id: "settings",
    path: "/settings",
    text: "Settings",
    icon: faGear,
  },
  {
    id: "files",
    path: "/files",
    text: "Files",
    icon: faFolder,
  },
];

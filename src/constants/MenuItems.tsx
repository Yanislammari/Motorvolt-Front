import type { MenuItem } from "../models/structs/MenuItem";

const menuItems: MenuItem[] = [
  {
    path: "#",
    label: "Vehicles",
    showInNavbar: true,
    showInFooter: true,
    section: "nav"
  },
  {
    path: "#",
    label: "Technology",
    showInNavbar: true,
    showInFooter: true,
    section: "nav"
  },
  {
    path: "#",
    label: "Experience",
    showInNavbar: true,
    showInFooter: true,
    section: "nav"
  },
  {
    path: "#",
    label: "About",
    showInNavbar: false,
    showInFooter: true,
    section: "company"
  },
  {
    path: "#",
    label: "Careers",
    showInNavbar: false,
    showInFooter: true,
    section: "company"
  },
  {
    path: "#",
    label: "Contact",
    showInNavbar: false,
    showInFooter: true,
    section: "company"
  },
];

export default menuItems;

export interface MenuItem {
  path: string;
  label: string;
  showInNavbar: boolean;
  showInFooter: boolean;
  section?: "nav" | "company";
}


export const menuOptions = [
  {
    path: "/products",
    name: "Products",
    icon: true,
    iconClassList: ["uil-box"]
  },
  {
    path: "/users",
    name: "User Management",
    icon: true,
    roles: ['root', 'admin'],
    iconClassList: ["mdi", "mdi-account-outline"]
  },
  {
    path: "/tenants",
    name: "Tenants",
    icon: true,
    roles: ['root'],
    iconClassList: ["ri-bubble-chart-line"]
  },
];

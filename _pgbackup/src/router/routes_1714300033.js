

// boilerplate routes

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/authentication/login.vue"),
  },
  {
    path: "/forgotpassword",
    name: "Forgot Password",
    component: () => import("@/pages/authentication/forgot-password.vue"),
  },
  {
    path: "/resetpassword",
    name: "Reset Password",
    component: () => import("@/pages/authentication/reset-password.vue"),
  },
];

const errorPageRoutes = [
  {
    path: "/error-401",
    name: "error-401",
    component: () => import("@/pages/error/error-401.vue"),
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/pages/error/error-404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "error-404",
  },
];

const mainRoutes = [
    {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/pages/dashboard/dashboard.vue"),
    meta: { authRequired: true },
  },
  {
    path: "/",
    redirect: "/products",
    meta: { authRequired: true },
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/products/products-list.vue"),
    meta: { authRequired: true },
  },
  
];

const managementRoutes = [
  {
    path: "/users",
    name: "Users",
    component: () => import("@/pages/users/users-list.vue"),
    meta: { authRequired: true, roles: ["root", "admin"] },
  },
  {
    path: "/tenants",
    name: "Tenants",
    component: () => import("@/pages/tenants/tenants-list.vue"),
    meta: { authRequired: true, roles: ["root"] },
  },
];

const accountRoutes = [
  {
    path: "/account",
    meta: { authRequired: true },
    redirect: "/account/profile",
    children: [
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/pages/account/profile.vue"),
      },
      {
        path: "preferences",
        name: "Preferences",
        component: () => import("@/pages/account/preferences.vue"),
      },
      {
        path: "change-password",
        name: "Change Password",
        component: () => import("@/pages/account/change-password.vue"),
      },
    ],
  },
];

const boilerplateRoutes = [...authRoutes, ...errorPageRoutes, ...mainRoutes, ...accountRoutes, ...managementRoutes];


// template resources

// base ui routes

const baseUiRoutes = [
  {
    path: "/ui",
    name: "Base UI",
    header: "Components",
    icon: "uil-box",
    meta: { authRequired: true },
    children: [
      {
        path: "accordions",
        name: "Accordions",
        component: () => import("@/template-resources/base-ui/accordions.vue"),
      },
      {
        path: "alerts",
        name: "Alerts",
        component: () => import("@/template-resources/base-ui/alerts.vue"),
      },
      {
        path: "avatars",
        name: "Avatars",
        component: () => import("@/template-resources/base-ui/avatars.vue"),
      },
      {
        path: "badges",
        name: "Badges",
        component: () => import("@/template-resources/base-ui/badges.vue"),
      },
      {
        path: "buttons",
        name: "Buttons",
        component: () => import("@/template-resources/base-ui/buttons.vue"),
      },
      {
        path: "cards",
        name: "Cards",
        component: () => import("@/template-resources/base-ui/cards.vue"),
      },
      {
        path: "dropdowns",
        name: "Dropdowns",
        component: () => import("@/template-resources/base-ui/dropdowns.vue"),
      },
      {
        path: "form-basic",
        name: "Form Basic",
        component: () => import("@/template-resources/base-ui/form/form-basic.vue"),
      },
      {
        path: "form-advanced",
        name: "Form Advanced",
        component: () => import("@/template-resources/base-ui/form/form-advanced.vue"),
      },
      {
        path: "list-group",
        name: "List Group",
        component: () => import("@/template-resources/base-ui/list-group.vue"),
      },
      {
        path: "modals",
        name: "Modals",
        component: () => import("@/template-resources/base-ui/modals.vue"),
      },
      {
        path: "offcanvas",
        name: "offcanvas",
        component: () => import("@/template-resources/base-ui/offcanvas.vue"),
      },
      {
        path: "pagination",
        name: "Pagination",
        component: () => import("@/template-resources/base-ui/pagination.vue"),
      },
      {
        path: "popovers",
        name: "Popovers",
        component: () => import("@/template-resources/base-ui/popovers.vue"),
      },
      {
        path: "progress",
        name: "Progress",
        component: () => import("@/template-resources/base-ui/progress.vue"),
      },
      {
        path: "spinners",
        name: "Spinners",
        component: () => import("@/template-resources/base-ui/spinners.vue"),
      },
      {
        path: "tables",
        name: "Tables",
        component: () => import("@/template-resources/base-ui/tables.vue"),
      },
      {
        path: "tabs",
        name: "Tabs",
        component: () => import("@/template-resources/base-ui/tabs.vue"),
      },
      {
        path: "tooltips",
        name: "Tooltips",
        component: () => import("@/template-resources/base-ui/tooltips.vue"),
      },
      {
        path: "typography",
        name: "Typography",
        component: () => import("@/template-resources/base-ui/typography.vue"),
      },
    ],
  },
];


// extended ui rotues

const extendedUiRoutes = [
  {
    path: "/extended",
    name: "Extended UI",
    icon: "uil-package",
    meta: { authRequired: true },
    children: [
      {
        path: "charts",
        name: "Charts",
        component: () => import("@/template-resources/extended-ui/charts/apex-charts.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/template-resources/extended-ui/dashboard/sample-dashboard.vue"),
      },
      {
        path: "dragula",
        name: "Dragula",
        component: () => import("@/template-resources/extended-ui/dragula/dragula.vue"),
      },
      {
        path: "icons",
        name: "Icons",
        children: [
          {
            path: "remix-icons",
            name: "Remix Icons",
            component: () => import("@/template-resources/extended-ui/icons/remix-icon.vue"),
          },
          {
            path: "mdi",
            name: "Material Design",
            component: () => import("@/template-resources/extended-ui/icons/material-design-icon.vue"),
          },
          {
            path: "unicons",
            name: "Unicons",
            component: () => import("@/template-resources/extended-ui/icons/unicon-icon.vue"),
          },
        ],
      },
      {
        path: "range-slider",
        name: "Range Slider",
        component: () => import("@/template-resources/extended-ui/range-slider/range-slider.vue"),
      },   
    ],
  },
];

const templateResourcesRoutes = [...baseUiRoutes, ...extendedUiRoutes];


// all routes

export const allRoutes = [...boilerplateRoutes, ...templateResourcesRoutes];

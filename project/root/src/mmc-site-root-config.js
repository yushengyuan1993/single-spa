import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

/**
 * 默认的 welcome 应用
 */
const loadingWelcome = () => {
  return System.import(
    "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  )
}
registerApplication(
  '@single-spa/welcome',
  loadingWelcome,
  location => location.pathname === '/'
);

/**
 * mmc-site-store 子应用
 */
registerApplication({
  name: "@mmc-site/store",
  app: () => System.import("@mmc-site/store"),
  activeWhen: ["/store"]
});

/**
 * mmc-site-report 子应用
 */
registerApplication({
  name: "@mmc-site/report",
  app: () => System.import("@mmc-site/report"),
  activeWhen: ["/report"]
});

start({
  urlRerouteOnly: true,
});

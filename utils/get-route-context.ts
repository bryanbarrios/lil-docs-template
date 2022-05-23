import { Route, RouteContext } from "@/types";

export const getRouteContext = (routes: Route[], currentRoute?: Route) => {
  let context: RouteContext = {};

  if (!currentRoute) return context;

  const { path } = currentRoute;

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];

    if (route && route.path === path) {
      const previousRoute = routes[index - 1];
      const nextRoute = routes[index + 1];

      context = {
        previousRoute,
        nextRoute,
        currentRoute,
      };
    }
  }

  return context;
};

import { Route } from "@/types";

export const removeFromLast = (path: string, key: string) => {
  const index = path.lastIndexOf(key);
  return index === -1 ? path : path.substring(0, index);
};

export const findRouteByPath = (
  path: string,
  routes: Route[]
): Route | undefined => {
  for (const route of routes) {
    if (route.path && removeFromLast(route.path, ".") === path) {
      return route;
    }
  }
};

import NamespacePage from "apps/front-office/namespaces/pages/NamespacePage/NamespacePage";
import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";

publicRoutes([
  {
    path: URLS.namespaces.viewNamespaceRoute,
    component: NamespacePage,
  },
]);

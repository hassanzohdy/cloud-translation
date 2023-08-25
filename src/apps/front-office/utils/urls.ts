// append urls here, DO NOT remove this line

import { Namespace } from "apps/translations/utils/types";

const URLS = {
  namespaces: {
    viewNamespace: (namespace: Namespace) => `/namespaces/${namespace.name}`,
    viewNamespaceRoute: "/namespaces/:name",
  },
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    login: "/login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
};

export default URLS;

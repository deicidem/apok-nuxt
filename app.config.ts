import type { AwesomeLayoutPageNavbarMenu } from "./utils/types";

export interface NuxtAppConfig {
  /** title name */
  name?: string;
  /** description */
  description?: string;

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string;
    };
  };

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[];
      };
    };
    /** footer */
    footer?: {
      /** footer year */
      year?: number;
    };
    /** welcome component page */
  };

  /** author config */
  author?: {
    /** author name */
    name?: string;
    /** author links */
    links?: {
      /** author github link */
      github?: string;
      /** author medium link */
      medium?: string;
      /** author website link */
      website?: string;
    };
  };

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean;
}

declare module "@nuxt/schema" {
  interface AppConfigInput {
    awesome?: NuxtAppConfig;
  }
}

export default defineAppConfig({
  awesome: {
    name: "АПОК",
    description: "Автоматизация процессов оценки качества данных ДЗЗ",
    layout: {
      page: {
        navbar: {
          menus: [],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
    },
  } as NuxtAppConfig,
  nuxtIcon: {
    aliases: {},
    class: "",
    size: "1em",
  },
});

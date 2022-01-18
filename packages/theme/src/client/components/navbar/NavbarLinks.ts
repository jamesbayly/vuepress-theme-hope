import { defineComponent, h } from "vue";
import { useNavbarConfig } from "../../composables";
import DropdownLink from "./DropdownLink";
import LanguageDropdown from "./LanguageDropdown";
import AutoLink from "../AutoLink";
import RepoLink from "../RepoLink";

import type { VNode } from "vue";

export default defineComponent({
  name: "NavbarLinks",

  setup() {
    const navbarConfig = useNavbarConfig();

    return (): VNode | null =>
      navbarConfig.value.length
        ? h("nav", { class: "nav-links" }, [
            ...navbarConfig.value.map((config) =>
              h(
                "div",
                { class: ["nav-item", "hide-in-mobile"] },
                "children" in config
                  ? h(DropdownLink, { config })
                  : h(AutoLink, { config })
              )
            ),
            h("div", { class: ["nav-item"] }, h(LanguageDropdown)),
            h("div", { class: ["nav-item", "hide-in-mobile"] }, h(RepoLink)),
          ])
        : null;
  },
});

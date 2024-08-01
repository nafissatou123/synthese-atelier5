import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/chat.js";
import * as Page2 from "../views/layout.js";
import * as Page3 from "../views/person.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", Page0),
    createRoute("chat", Page1),
    createRoute("layout", Page2),
    createRoute("person", Page3)
];
export default routes;

import Root from "./root";
import Component from "./component";
import Page1 from "./page1";
import Page2 from "./page2";

const routes = [
	{ component: Root,
		routes: [
			{ path: "/",
				exact: true,
				component: Component
			},
			{ path: "/page1",
				component: Page1
			},
			{ path: "/page2",
				component: Page2
			}
		]
	}
];

export default routes;

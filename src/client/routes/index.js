import Root from "./root";
import Cart from "./cart";
import Page2 from "./page2";
import Page3 from "./page3";

const routes = [
	{ component: Root,
		routes: [
			{ path: "/",
				exact: true,
				component: Cart
			},
			{ path: "/page2",
				component: Page2
			},
			{ path: "/page3",
				component: Page3
			}
		]
	}
];

export default routes;

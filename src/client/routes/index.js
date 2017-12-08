import Root from "./root";
import Page1ReduxContainer from "../redux/containers/counter";
import Page2 from "./page2";
import Page3 from "./page3";

const routes = [
	{ component: Root,
		routes: [
			{ path: "/",
				exact: true,
				component: Page1ReduxContainer
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

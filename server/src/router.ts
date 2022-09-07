const info = {
	path: "",
	_HTML: ""
};

/**
 * @brief	Redirects to the specified route and load that route's
 *			content for the user to view.
**/

function redirect(route: string): Object {
	info.path = route;
	return info;
}

export { redirect };

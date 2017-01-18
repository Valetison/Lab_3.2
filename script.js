function setCookie (name, value, visits, last, expires) {
      document.cookie = name + "=" + escape(value) + ";";
	document.cookie = "visits=" + visits + ";";
	document.cookie = "last=" + last + ";";
	document.cookie = "expires=" +  expires;
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function loadCookies() {
	document.getElementById("username").innerHTML = getCookie("name");
	document.getElementById("visits_amount").innerHTML = getCookie("visits");
	document.getElementById("last_visit_time").innerHTML = getCookie("last");
	var last = (new Date()).toUTCString();
	var expires = (new Date(new Date().getTime() + 60 * 60 * 1000)).toUTCString();
	setCookie("name", getCookie("name"), parseInt(getCookie("visits")) + 1, last, expires);
}

function registrate() {
	var name = document.getElementById("login").value;
	var visits = 0;
	var last = (new Date()).toUTCString();
	var expires = (new Date(new Date().getTime() + 60 * 60 * 1000)).toUTCString();
	setCookie("name", name, visits, last, expires);
	loadCookies();
}

function make_null() {
	var expires = (new Date(new Date().getTime() + 60 * 60 * 1000)).toUTCString();
	setCookie("name", getCookie("name"), 0, getCookie("last"), expires);
	document.getElementById("visits_amount").innerHTML = getCookie("visits");
}

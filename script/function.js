
function for_each_elem(selector, fun)
{
	var elems = document.querySelectorAll(selector);
	for(var i = 0; i < elems.length; ++i) {
		fun(elems[i]);
	}
	return;
}
function for_each_elem_style(selector, fun)
{
	var elems = document.querySelectorAll(selector);
	for(var i = 0; i < elems.length; ++i) {
		fun(elems[i].style);
	}
	return;
}
function px(number)
{
	return number + 'px';
}
function set_position(elem, x, y)
{
	var s = elem.style;
	s.display = 'block';
	s.position = 'absolute';
	s.left = px(x);
	s.top = px(y);
	return;
}

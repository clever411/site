// need to eval function.js

for_each_elem_style('*', function(s) {
	s.boxSizing = 'border-box';
	s.padding = '0';
	s.margin = '0';
	return;
});


var NAVIGATION_HEIGHT = 60;
var MAINCONT_WIDTH = 1000;
var ASIDE_TO_MAIN = 0.25;

var HTML_BACKGROUND_COLOR = '#e0e0e0';
var NAVIGATION_BACKGROUND_COLOR = '#f0f0f0';
var ASIDE_BACKGROUND_COLOR = '#f0f0f0';
var MAIN_BACKGROUND_COLOR = '#f5f5f5';
var BORDER_COLOR = 'white';

var html = document.documentElement;
var navcont = document.getElementById('navcontainer');
var nav = document.getElementById('navigation');
var maincont = document.getElementById('maincontainer');
var aside = document.getElementById('aside');
var main = document.getElementById('main');

var s;

for_each_elem_style('h1', function(s) {
	s.textAlign = 'center';
	s.paddingLeft = '20px';
	s.paddingRight = '20px';
	s.marginTop = '70px';
	s.marginBottom = '30px';
});

for_each_elem_style('h2', function(s) {
	s.marginTop = '60px';
	s.marginBottom = '20px';
	s.paddingLeft = '40px';
});

for_each_elem_style('p', function(s) {
	s.marginTop = '30px';
	s.marginBottom = '30px';
});

for_each_elem_style('a', function(s) {
	s.color = 'black';
});


if(html) {
	s = html.style;
	s.backgroundColor = HTML_BACKGROUND_COLOR;
}

if(navcont) {
	s = navcont.style;
	s.boxSizing = 'content-box';
	s.width = '100%';
	s.height = px(NAVIGATION_HEIGHT);
	s.borderBottom = '2px solid ' + BORDER_COLOR;

	s.backgroundColor = NAVIGATION_BACKGROUND_COLOR;
}

if(nav) {
	s = nav.style;
	s.width = px(MAINCONT_WIDTH);
	s.margin = 'auto';
	s.textAlign = 'center';
	for_each_elem_style('#navigation a', function(s) {
		s.display = 'block';
		s.width = '25%';
		s.height = '100%';
		s.cssFloat = 'left';
		s.textDecorationLine = 'none';
		s.color = 'black';
		s.lineHeight = px(NAVIGATION_HEIGHT);
	});
}

if(maincont) {
	s = maincont.style;
	s.width = px(MAINCONT_WIDTH);
	s.margin = 'auto';
	s.position = 'relative';
	s.border = '2px solid ' + BORDER_COLOR;
	s.borderTop = 'none';
}

if(aside) with(aside.style) {
	width = px(ASIDE_TO_MAIN*MAINCONT_WIDTH);
	position = 'absolute';
	for_each_elem_style('#aside a', function(s) {
		s.display = 'block';
		s.width = '100%';
		s.padding = '5px';
		s.textDecorationLine = 'none';
		s.color = 'black';
	});
	backgroundColor = ASIDE_BACKGROUND_COLOR;
	borderRight = '1px solid ' + BORDER_COLOR;
}

if(main) {
	s = main.style;
	s.width = px((1-ASIDE_TO_MAIN)*MAINCONT_WIDTH);
	s.minHeight = '600px';
	s.position = 'absolute';
	s.left = px(ASIDE_TO_MAIN*MAINCONT_WIDTH);
	s.padding = '20px';
	s.backgroundColor = MAIN_BACKGROUND_COLOR;
}


if(aside && main) {
	if(aside.offsetHeight > main.offsetHeight) {
		main.style.height = px(aside.offsetHeight);
	} 
	else {
		aside.style.height = px(main.offsetHeight);
	}
	if(maincont) {
		maincont.style.boxSizing = 'content-box';
		maincont.style.height = px(main.offsetHeight);
	}
}

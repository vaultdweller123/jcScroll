[ABOUT]
a javascript content scroll using jquery
	
[HOW-TO]
include external javascript files:
jcPagination is powered by jquery so we need to load jquery first before we can use it
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcscroll.js"></script>

html mark up:
<div id="myid">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum leo dolor, non dignissim eros. In hac habitasse 
	platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla arcu urna, 
	vehicula eget sollicitudin vitae, gravida ac purus. Vivamus in quam nec justo vestibulum accumsan. Vestibulum in urna dui. 
	Pellentesque non risus turpis, quis hendrerit lacus. Maecenas sed mauris urna, sed viverra est. Nulla vel diam ut tellus 
	facilisis aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
	Cras urna nibh, convallis in posuere ac, tincidunt eu lacus. Donec enim tortor, rutrum non imperdiet in, tincidunt nec 
	orci. Sed ac placerat elit. Donec aliquam aliquet ipsum, eu consequat risus iaculis eleifend. Nam sem justo, tristique 
	quis molestie nec, vulputate sit amet lorem. In blandit ante non risus dignissim ut ultricies ante adipiscing.
</div>
<br />
<div>
	<a href="javascript:void(0);" id="jup">up</a>
</div>
<div style="margin-top: 113px;">
	<a href="javascript:void(0);" id="jdown">down</a>
</div>
	
CSS styling:
#myid{
	width: 242px;
	height: 200px;
	border: 1px red solid;
	margin-right: 10px;
	overflow: hidden;
	float: left;
}	
	
function call:
jcScroll({
	'id': 'myid',
	'up': 'jup',
	'down': 'jdown',
	'spup':4000,
	'spdown':4000
});
			
[EXAMPLE]
<html>
<head>
<title>jcPagination</title>
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcscroll.js"></script>
<script>
jQuery(document).ready(function(){
	jQuery.jcScroll({
		'id': 'myid',
		'up': 'jup',
		'down': 'jdown',
		'spup':4000,
		'spdown':4000
	});
});
</script>
</head>
<body>
<h1>jcScroll</h1>
<div id="myid">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum leo dolor, non dignissim eros. In hac habitasse 
	platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla arcu urna, 
	vehicula eget sollicitudin vitae, gravida ac purus. Vivamus in quam nec justo vestibulum accumsan. Vestibulum in urna dui. 
	Pellentesque non risus turpis, quis hendrerit lacus. Maecenas sed mauris urna, sed viverra est. Nulla vel diam ut tellus 
	facilisis aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
	Cras urna nibh, convallis in posuere ac, tincidunt eu lacus. Donec enim tortor, rutrum non imperdiet in, tincidunt nec 
	orci. Sed ac placerat elit. Donec aliquam aliquet ipsum, eu consequat risus iaculis eleifend. Nam sem justo, tristique 
	quis molestie nec, vulputate sit amet lorem. In blandit ante non risus dignissim ut ultricies ante adipiscing.
</div>
<br />
<div>
	<a href="javascript:void(0);" id="jup">up</a>
</div>
<div style="margin-top: 113px;">
	<a href="javascript:void(0);" id="jdown">down</a>
</div>
<body>
</html>

var jcScroll=function(e){var t=e.id;var n=e.up;var r=e.down;var i=e.spup!=null?e.spup:4e3;var s=e.spdown!=null?e.spdown:4e3;var o=jQuery("#"+t+"").prop("scrollHeight");jQuery("#"+r+"").hover(function(){jQuery("#"+t+"").animate({scrollTop:o},i)},function(){jQuery("#"+t+"").stop()});jQuery("#"+n+"").hover(function(){jQuery("#"+t+"").animate({scrollTop:0},s)},function(){jQuery("#"+t+"").stop()})}
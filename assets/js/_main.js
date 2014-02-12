(function(){"use strict";var e;e=function(e){var t;t=function(e){return e!==""&&!isNaN(e)&&Math.round(e)===e};e.fn.stripClass=function(e,t){var n;n=new RegExp((!t?"\\b":"\\S+")+e+"\\S*","g");this.attr("class",function(e,t){if(!t){return}return t.replace(n,"")});return this};e.onepage_scroll=function(n,r){var i,s;this.settings={};this.$element=e(n);this.state="";this.eventState="";this.quietPeriod=500;s=function(){var e,t;e=document.body||document.documentElement;t=e.style;return t.transitions!==void 0||t.WebkitTransition!==void 0};i=function(){var e,t,n,r,i,s,o,u;t="Webkit Moz O ms".split(" ");n="transform";i=document.body||document.documentElement;s=i.style;r=s[n]!==void 0;if(!r){n=n.charAt(0).toUpperCase()+n.slice(1);for(o=0,u=t.length;o<u;o++){e=t[o];if(s[e+n]!==void 0){return true}}}return r};this.transformPage=function(t,n){var r,i,s=this;n=typeof n!=="function"?e.noop:n;r=(t-1)*100*-1;if(!this.supportTransition||!this.supportTransform){this.$element.animate({top:""+r+"%"},function(){s.settings.afterMove(t);return n(t)})}else{this.$element.css({"-ms-transform":"translate(0, "+r+"%)","-ms-transition":"all "+this.settings.animationTime+"ms "+this.settings.easing,"-webkit-transform":"translate(0, "+r+"%)","-webkit-transition":"all "+this.settings.animationTime+"ms "+this.settings.easing,transform:"translate(0, "+r+"%)",transition:"all "+this.settings.animationTime+"ms "+this.settings.easing});i=this;this.$element.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){if(e.target===this){i.settings.afterMove(t);return n(t)}})}return this};this.moveDown=function(){var t;t=e(""+this.settings.sectionContainer+".active").data("index");return this.moveTo(t+1)};this.moveUp=function(){var t;t=e(""+this.settings.sectionContainer+".active").data("index");return this.moveTo(t-1)};this.moveTo=function(n){var r,i,s,o,u,a=this;r=e(""+this.settings.sectionContainer+".active");i=r.data("index");if(!t(n)){u=this.$element.find(n);if(u.length!==1){return}n=u.data("index");if(!t(n)){return}}if(n===i){return}s=n;if(this.settings.smooth&&Math.abs(i-n)>1){s=n>i?i+1:i-1}if(s<1||s>this.total){if(this.settings.loop){s=s<1?this.total:1}else{return}}o=e(""+this.settings.sectionContainer+"[data-index='"+s+"']");this.settings.beforeMove(r.data("index"));r.removeClass("active");o.addClass("active");if(this.settings.pagination){e(".onepage-pagination li a.active").removeClass("active");e(".onepage-pagination li a[data-index='"+s+"']").addClass("active")}e("body").removeClass("viewing-page-"+r.data("index")).addClass("viewing-page-"+o.data("index"));if(this.settings.updateURL){this.updateHistory(s)}if(this.settings.smooth&&n!==s){this.transformPage(s,function(){return a.moveTo(n)})}else{this.transformPage(s)}return this};this.updateHistory=function(e){var t;if(history.replaceState){t=window.location.href.substr(0,""+window.location.href.indexOf("#")+"#"+e);history.pushState({},document.title,t)}return this};this.bindEvents=function(){if(this.eventState==="binded"||this.state!=="created"){return}this.bindScrollEvents();this.bindSwipeEvents();if(this.settings.keyboard){this.bindKeyEvents()}this.eventState="binded";return this};this.unbindEvents=function(){if(this.eventState!=="binded"){return}this.unbindScrollEvents();this.unbindSwipeEvents();if(this.settings.keyboard){this.unbindKeyEvents()}this.eventState="unbinded";return this};this.bindScrollEvents=function(){var t=this;e(document).bind("mousewheel.onepage DOMMouseScroll.onepage",function(e){var n;e.preventDefault();n=e.originalEvent.wheelDelta||-e.originalEvent.detail;return t.init_scroll(e,n)});return this};this.unbindScrollEvents=function(){e(document).unbind("mousewheel.onepage DOMMouseScroll.onepage");return this};this.bindSwipeEvents=function(){var t,n=this;t=this.$element.hammer();this.$element.hammer().on("swipedown.onepage",function(e){e.preventDefault();e.gesture.preventDefault();return n.moveUp()}).on("swipeup.onepage",function(e){e.preventDefault();e.gesture.preventDefault();return n.moveDown()});e(document).bind("touchmove.onepage",function(e){e.preventDefault();return false});return this};this.unbindSwipeEvents=function(){var t;t=this.$element.hammer();t.off("swipedown.onepage");t.off("swipeup.onepage");e(document).unbind("touchmove.onepage");return this};this.bindKeyEvents=function(){var t=this;e(document).on("keydown.onepage",function(e){var n;n=e.target.nodeName;if(n==="INPUT"||n==="TEXTAREA"){return}switch(e.which){case 33:case 38:t.moveUp();break;case 34:case 40:t.moveDown();break;case 36:t.moveTo(1);break;case 35:t.moveTo(t.total);break;default:return}return e.preventDefault()});return this};this.unbindKeyEvents=function(){e(document).off("keydown.onepage");return this};this.viewportTooSmall=function(){if(this.settings.responsiveFallbackWidth!==false&&e(window).width()<this.settings.responsiveFallbackWidth){return true}if(this.settings.responsiveFallbackHeight!==false&&e(window).height()<this.settings.responsiveFallbackHeight){return true}return false};this.watchResponsive=function(){if(this.viewportTooSmall()){if(this.state==="created"){this.destroy()}}else{if(this.state!=="created"){this.create()}}return this};this.init_scroll=function(e,t){var n,r;n=t;r=(new Date).getTime();if(r-this.lastAnimation<this.quietPeriod+this.settings.animationTime){e.preventDefault();return}if(n<0){this.moveDown()}else{this.moveUp()}this.lastAnimation=r;return this};this.bindPagination=function(){var t=this;e(".onepage-pagination").on("click.onepage","li a",function(n){var r;r=e(n.currentTarget).data("index");return t.moveTo(r)});return this};this.createSections=function(){var t,n=this;t=0;e.each(this.sections,function(r,i){e(i).addClass("section").attr("data-index",r+1).css({position:"absolute",top:""+t+"%"});t+=100;if(n.settings.pagination){return n.paginationList+="<li><a data-index='"+(r+1)+"' href='#"+(r+1)+"'></a></li>"}});return this};this.destroySections=function(){this.sections.removeClass("section active").removeAttr("data-index style");return this};this.destroy=function(){if(this.state==="created"){this.settings.beforeDestroy(this);e("html, body").removeClass("onepage-scroll-enabled");e("body").stripClass("viewing-page-");this.$element.removeClass("onepage-wrapper").removeAttr("style");this.destroySections();if(this.settings.pagination){e("ul.onepage-pagination").off("click.onepage","li a");e("ul.onepage-pagination").remove()}this.unbindEvents();this.state="destroyed";this.settings.afterDestroy(this)}return this};this.create=function(){var t,n;if(this.state!=="created"){if(this.viewportTooSmall()){return}this.settings.beforeCreate(this);this.sections=e(this.settings.sectionContainer);this.total=this.sections.length;this.lastAnimation=0;this.paginationList="";e("html, body").addClass("onepage-scroll-enabled");this.$element.addClass("onepage-wrapper").css("position","relative");this.createSections();if(this.settings.pagination){e("<ul class='onepage-pagination'>"+this.paginationList+"</ul>").prependTo("body");n=e(".onepage-pagination").height()/2*-1;e(".onepage-pagination").css("margin-top",n);this.bindPagination()}this.reset();if(this.settings.updateURL&&window.location.hash!==""&&window.location.hash!=="#1"){t=window.location.hash.replace("#","");this.moveTo(t)}this.state="created";this.bindEvents();this.settings.afterCreate(this)}return this};this.reset=function(){e(""+this.settings.sectionContainer+"[data-index='1']").addClass("active");e("body").addClass("viewing-page-1");if(this.settings.pagination){e(".onepage-pagination li a[data-index='1']").addClass("active")}return e(window).scrollTop(0)};this.init=function(){var t=this;this.settings=e.extend({},this.defaults,r);this.supportTransition=s();this.supportTransform=i();if(this.settings.responsiveFallbackWidth!==false||this.settings.responsiveFallbackHeight!==false){e(window).on("resize.onepage",function(){return t.watchResponsive()})}this.create();return this};this.init();return this};e.onepage_scroll.prototype.defaults={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:true,keyboard:false,updateURL:false,beforeMove:e.noop,afterMove:e.noop,loop:false,responsiveFallbackWidth:false,responsiveFallbackHeight:false,smooth:false,beforeCreate:e.noop,afterCreate:e.noop,beforeDestroy:e.noop,afterDestroy:e.noop};e.fn.onepage_scroll=function(t){this.each(function(){var n;if(e(this).data("onepage_scroll")===void 0){n=new e.onepage_scroll(this,t);return e(this).data("onepage_scroll",n)}});if(this.length===1&&e(this).data("onepage_scroll")!==void 0){return e(this).data("onepage_scroll")}};return e.fn.onepage_scroll};if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}}).call(this)
// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {
      // JS here
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {
      // JS here
    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  }
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {

    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });

    UTIL.fire('common', 'finalize');
  }
};

$(document).ready(UTIL.loadEvents);

/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);



( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);
		$(".section").css({
		        position: "relative"
	    });
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
} )( jQuery );

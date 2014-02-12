  <div class="clear"></div>

<footer class="content-info container" role="contentinfo">
  <div class="row">
    <section id="contact">
	  <h2 class="white">CONTACT US</h2>
	  <div class="truelogo">
	    <div class="square1"></div>
	    <div class="square2"></div>
	    <div class="square3"></div>
	  </div>
	  <div class="col_3 contact_bg">
	     <div class="social-icons">
	     		<ul>
	     			<li><a href="http://facebook.com/MCSAATCHISHARE"> <img src="<?php get_bloginfo('home'); ?>assets/img/socialicons/facebook-32.png"></a></li>
	     		<!--<li><a href="http://www.youtube.com/MCSAATCHISHARE"> <img src="assets/img/socialicons/youtube-32.png"></a></li>--> 
            <li><a href="https://twitter.com/MCSAATCHISHARE"> <img src="<?php get_bloginfo('home'); ?>assets/img/socialicons/twitter-32.png"></a></li>
	     		<li><a href="https://plus.google.com/u/0/b/113754736926873558842/113754736926873558842/posts"> <img src="<?php get_bloginfo('home'); ?>assets/img/socialicons/googleplus-32.png"></a></li>
	     		</ul>
	     	</div>
	  <h3 class="company-title">M&C SAATCHI</h3>
  
    <div class="contact_info_mobile">
    <a class="address" href="http://maps.apple.com/?daddr=2032+Broadway,+Santa Monica,+CA+90404,&saddr=Current%20Location"><button type="button" >2032 Broadway, <br/>Santa Monica, CA <br/> ZIP 90404</button></a>
   <p>Phone: </p><a class="phone" href="tel:+13104016070"><button type="button" >+310 401 6070</button></a>
   <p>Fax: </p> <a class="phone" href="tel:+13102641910"><button type="button" >+310 264 1910</button></a>
    </div>
	 </div> 
 
  <a href="#" class="go-top"><img src="assets/img/share_arrow_top.png" /></a>
	</section>

	</div> <!-- Container -->
    </div>
  
</footer>


<!--Changing Background-->

<!-- PARAMETERS

Loop {doLoop:true}

 -->



    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" ></script>
    <script src="http://mcsaatchi-share.com/assets/js/video-js/video.js"></script>
    <script src="http://mcsaatchi-share.com/assets/js/bigvideo.js" ></script>
    <script src="http://mcsaatchi-share.com/assets/js/jquery.bxslider.min.js" type="text/javascript"></script>
    <script src="http://mcsaatchi-share.com/assets/js/jquery.anythingslider.min.js" type="text/javascript"></script>
    <script src="http://mcsaatchi-share.com/assets/js/jquery.anythingslider.video.min.js" type="text/javascript"></script>
    <script src="http://mcsaatchi-share.com/assets/js/custom.js" ></script>
	<!--SKROLLR-->
	<script src="../assets/js/imagesloaded.js" type="text/javascript" charset="utf-8"></script>
	<script src="../assets/js/_main.js" type="text/javascript" charset="utf-8"></script>
	<script src="../assets/js/main.js" type="text/javascript" charset="utf-8"></script>
	<script src="../assets/js/skrollr.js" type="text/javascript" charset="utf-8"></script>


  
   <!-- BOX SLIDER -->
 <script type="text/javascript">
   $('#mobileslider').bxSlider({ 
    speed: '4000',
    pause: '10000',
    auto: 'true',
    autoDelay: '3000',
    controls: 'false'
       });   
</script>


<!-- MENU APPEAR ON MOUSEOVER-->
<script>
$('.navbar').mouseover(function() {
   var $this = $(this);
   var id = $this.attr('rel');
   var $currentWidget = $('#' + id);
   $currentWidget.show().siblings('.inner').hide();
});
$('#wrap').mouseleave(function() {
    $('.inner').hide();
});
</script>

<!--VIDEO SLIDER (USES ANYTHING SLIDER) -->
<!-- CHANGE SLIDER DIV ID IN INDEX PAGE TO SWITCH SLIDERS AND ADD VIDEO CONTENT TO SLIDER-->

<script type="text/javascript">

var playvid = function(slider) {
var vid = slider.$currentPage.find('video');
if (vid.length) {
// autoplay
vid[0].play();
}
};

$('#vidSlider').anythingSlider({

theme               : "default", // Theme name
mode                : "vertical"   // Set mode to "horizontal", "vertical" or "fade" (only first letter needed); replaces vertical option
})
// Autoplay video in initial panel, if one exists
onInitialized: function(e, slider) {
playvid(slider);
},
// pause video when out of view
onSlideInit: function(e, slider) {
var vid = slider.$lastPage.find('video');
if (vid.length && typeof(vid[0].pause) !== 'undefined') {
vid[0].pause();
}
},
// play video
onSlideComplete: function(slider) {
playvid(slider);
},
// pause slideshow if video is playing
isVideoPlaying: function(slider) {
var vid = slider.$currentPage.find('video');
return (vid.length && typeof(vid[0].pause) !== 'undefined' && !vid[0].paused && !vid[0].ended);
}

});​


</script>

<script type="text/javascript">
  $("#backtoOne").click(function(e){
    $('#vidSlider').anythingSlider(1);
    console.log ("i work")
    e.preventDefault();
});
</script>

<!--SCROLL TO TOP-->
<script>
    $(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });
  </script>

<script>console.log($(this).scrollTop())</script>

<?php wp_footer(); ?>
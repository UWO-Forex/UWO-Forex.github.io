/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
!function(){function n(){var n=function(){t.animations&&this.removeEventListener(s,n),i()};window.addEventListener("scroll",e),classie.add(a,"loading"),t.animations?a.addEventListener(s,n):n()}function i(){var n=function(n){var i=0,r=setInterval(function(){if(i=Math.min(i+.04*Math.random()+.09,1),n.setProgress(i),1===i){classie.remove(a,"loading"),classie.add(a,"loaded"),clearInterval(r);var d=function(n){if(t.animations){if(n.target!==o)return;this.removeEventListener(s,d)}classie.add(document.body,"layout-switch"),window.removeEventListener("scroll",e)};t.animations?o.addEventListener(s,d):d()}},80)};r.setProgressFn(n)}function e(){window.scrollTo(0,0)}var t={animations:Modernizr.cssanimations},a=document.getElementById("bigWrapper"),o=a.querySelector(".ip-header"),r=new PathLoader(document.getElementById("ip-loader-circle")),d={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},s=d[Modernizr.prefixed("animation")];n()}();
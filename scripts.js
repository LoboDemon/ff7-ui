document.onkeydown = checkKey;
function checkKey(e) {
	if ($("#typed li").length !== 0) {
    e = e || window.event;
    if (e.keyCode == '38') {
    	document.getElementById('audio').play();
			currentItem = $("#typed li.selected");
			currentItem.removeClass('selected');
			if (currentItem.prev().length) {				
				currentItem.prev().addClass('selected');
			} else {
				$( "#typed li" ).last().addClass('selected');
			}
    }
    else if (e.keyCode == '40') {
    	document.getElementById('audio').play();
			currentItem = $("#typed li.selected");
			currentItem.removeClass('selected');
			if (currentItem.next().length) {				
				currentItem.next().addClass('selected');
			} else {
				$( "#typed li" ).first().addClass('selected');
			}
    }
	}
}

$(document).ready(function() {
	setTimeout(function(){

		animateDuration = 200;
		targetHeight = Math.ceil($(".dialogue").height());
		targetWidth = Math.ceil($(".dialogue").width());

		$('.dialogue').css('height', '0').removeClass('load').animate({ height: targetHeight }, { duration: animateDuration, queue: false });
		$('.dialogue').css('width', '0').animate({ width: targetWidth }, { duration: animateDuration, queue: false });
	  setTimeout(function(){
	  	var typed = new Typed('#typed', {
				strings: [$('#layout-text').html()],
				showCursor: false
			});
		}, animateDuration);
	}, 500);
});

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  return {total, minutes, seconds};
}

function initializeClock(endtime) {  
  function updateClock() {
    const t = getTimeRemaining(endtime);
   
    let timeString = ('0' + t.minutes).slice(-2) + ('0' + t.seconds).slice(-2);
    let timeStringArray = timeString.split("");
    
    $('#colon').toggleClass('blink');
    updateClass('didget1', 'number-' + timeStringArray[0]);
    updateClass('didget2', 'number-' + timeStringArray[1]);
    updateClass('didget3', 'number-' + timeStringArray[2]);
    updateClass('didget4', 'number-' + timeStringArray[3]);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      setTimeout(function(){
    		$('body').prepend($('<div id="go"></div>').hide().fadeIn());
    	}, 1000);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000);
initializeClock(deadline);

function updateClass(element, newClass) {
	currentClasses = $('#' + element).attr('class').split(" ");
	currentClass = currentClasses[1];
	$('#' + element).removeClass(currentClass);
	$('#' + element).addClass(newClass);
}
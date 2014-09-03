$(document).ready(function(){
		$(function(){
		  $("#title h1").typed({
		    strings: ["Hello, my name is Daniel Kamhi"],
		    typeSpeed: 30
		  });
		$("#aboutMe").animate({
			top: "420px", 
			opacity: 1
		}), 7000
		$("#one").delay(500).animate({
			top: "420px", 
			opacity: 1
		}), 7000
		$("#two").delay(1000).animate({
			top: "420px",
			opacity: 1
		}), 7000
		$("#three").delay(1500).animate({
			top: "420px", 
			opacity: 1
		}), 7000
		});

// $('#developer').mouseenter(function(){
// 		$(this).animate({left:300});	
// 	});

$('#aboutMe').click(function () {
  $('html,body').animate({
      scrollTop: $(document).height()/6.7,
  }, 1000);
});
$('#one').click(function () {
  $('html,body').animate({
      scrollTop: $(document).height()/3.4,
  }, 1000);
});
$('#two').click(function () {
  $('html,body').animate({
      scrollTop: $(document).height()/1.9,
  }, 1000);
});
$('#three').click(function () {
  $('html,body').animate({
      scrollTop: $(document).height()/1.4,
  }, 1000);
});
// $('#projects').click(function () {
//   $(this).animate({
//       top: "420px"
//   }, 1000);
// });
});
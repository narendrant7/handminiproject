$(document).ready(function(){
  var current=0;
    $('#prev').hide();
  $('#page1').hide();
  $('#page2').hide();
  $('#page3').hide();

	$('.slider').slider({full_width: true});
	$('.modal-trigger').leanModal();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

    $('.button-collapse').sideNav();

    $('.dropdown-button1').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }

  );
    $('.dropdown-button2').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }

  );

$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      complete: function() { window.location=""; } // Callback for Modal close
    }
  );
	$( "#loginform" ).submit(function (event) { 
           $.ajax({
            type: 'post',
            url: 'login.php',
            data: $('#loginform').serialize(),
            success: function (data) {
              if(data=="loggedin"){
                console.log((data));
                window.location="index.php"
              }else{
              $('#error').html(data);
              }
            }
          });
        event.preventDefault();
	});
  $( "#loginform1" ).submit(function (event) { 
           $.ajax({
            type: 'post',
            url: 'login.php',
            data: $('#loginform1').serialize(),
            success: function (data) {
              if(data=="loggedin"){
                console.log((data));
                window.location="index.php"
              }else{
              $('#error1').html(data);
              }
            }
          });
        event.preventDefault();
  });
$('#signupform').ajaxForm({                 
            data: $('#signupform').serialize(),
            success: function (data) {
              if(data=="signedup"){
                console.log((data));
                window.location="index.php"
              }
              $('#serror').html(data);
            }
          });
$('#signupform1').ajaxForm({                 
            data: $('#signupform').serialize(),
            success: function (data) {
              if(data=="signedup"){
                console.log((data));
                window.location="index.php"
              }
              $('#serror1').html(data);
            }
          });
$('#prev').on('click',function(){
  current--;
  console.log(current);
  $('#page'+(current-1)).hide();
  $('#page'+(current+1)).hide();
 $('#page'+current).fadeIn(100);
 if (current==0) {$('#prev').hide();$('#next').fadeIn(100);}else{
  if (current==3) {$('#next').hide();$('#prev').fadeIn(100);}else{$('#next').fadeIn(100);$('#prev').fadeIn(100);}
 }
});

$('#next').on('click',function(){
  current++;  
  console.log(current);
  $('#page'+(current-1)).hide();
  $('#page'+(current+1)).hide();
  $('#page'+current).fadeIn(100);
 if (current==0) {$('#prev').hide();$('#next').fadeIn(100);}else{
  if (current==3) {$('#next').hide();$('#prev').fadeIn(100);}else{$('#next').fadeIn(100);$('#prev').fadeIn(100);}
 }

});

});
  function logout(){

           $.ajax({
            type: 'post',
            url: 'logout.php',
            success: function (data) {
                window.location="index.php"
              }
            });
  }

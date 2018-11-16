var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);
});

function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=13680255@itcuautla.edu.mx"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('input-5').value)
    ;

    window.location.href = link;
}
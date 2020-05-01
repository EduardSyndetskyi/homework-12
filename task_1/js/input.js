    $('form :input').blur(function() {
      if(0 === $('form__field:focus').length) { 
        isFormFocused = false;
        document.getElementById('address').value='Auskteez Tran';
        document.getElementById('email').value='';
        document.getElementById('tel').value='';
        document.getElementById('message').value='';
      }

    });
  
  

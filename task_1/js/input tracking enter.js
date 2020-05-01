// Скрипт для отслеживания нажатия "Enter" в отдельно поле с id, стирания текста при клике в любом месте стирается, добавления классов(стелей) и удаления классов(стелей), отслеживание потери фокуса.
  
window.addEventListener ("keypress", function (e) { 

          document.getElementById('address').value;
          var html =  name;
          var name = document.getElementById('email').value; // отслеживание введенного в пункт формы и отправленного с помощью "enter"  
          var html =  name;
          var name = document.getElementById('tel').value; // отслеживание введенного в пункт формы и отправленного с помощью "enter"  
          var html =  name;
          var name = document.getElementById('message').value; // отслеживание введенного в пункт формы и отправленного с помощью "enter"  
          var html =  name;
          
          document.getElementById('address').value='Auskteez Tran'; //текст в input с определённым id стирается
          document.getElementById('email').value='';
          document.getElementById('tel').value='';
          document.getElementById('message').value='';

          $('input').blur();

          var el = document.getElementById('email');
                                                    el.classList.add('form__field--border');  // input-у с id добавляется класс(стиль)
        }
    });  

  

    $('form :input').blur(function() {
      if(0 === $('form__field:focus').length) { 
        isFormFocused = false;// Форма потеряла фокус
        document.getElementById('address').value='Auskteez Tran'; // при потере фокуса у input с id стирается текст
        document.getElementById('email').value='';
        var el = document.getElementById('email');
                                                    el.classList.remove('form__field--border'); //при потере фокуса у input с id удаляется класс(стиль)
        document.getElementById('tel').value='';
        document.getElementById('message').value='';
      }
    });

    document.onclick = function() {
      var el = document.getElementById('email');
                                                    el.classList.remove('form__field--border'); // при клике в любом месте удаляется класс(стиль)
    }
    

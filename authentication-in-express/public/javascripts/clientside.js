$(document).ready(function() {

  $('input')
    .blur(function(e){

      // on blur of any input, save all the data in an object
      var formData = $('#signup').serializeArray();

      // Set a flag in localStorage to indicate that there is saved data for next page reload
      localStorage.setItem('hasData', true);

      $.each(formData, function(i, obj){
        // make sure password is never saved to localStorage
        if(obj.name !== 'password' && obj.name !== 'password_confirm'){
          localStorage.setItem(obj.name, obj.value);
        }

      });

    });

    // Reload fields if localStorage has form data saved
    if (localStorage.getItem('hasData')) {

      // Post alert message to user indicating that it found saved form data in localStorage
      $('#messages')
        .append(
          "<div class='alert alert-success' role='alert'>Found saved form data in localStorage:</div>"
        );

      var formData = $('#signup').serializeArray();

      $.each(formData, function(i, obj){
        // crafts an attribute selector for each of the previously save form inputs
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
      })

    }

});

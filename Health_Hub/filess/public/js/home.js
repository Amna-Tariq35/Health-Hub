$(document).ready(function() {
    $('#adminFormButton').click(function() {
      $('#adminForm').show();
      $('#staffForm').hide();
      $('#adminFormButton').addClass('selected');
      $('#staffFormButton').removeClass('selected');
    });
  
    $('#staffFormButton').click(function() {
      $('#adminForm').hide();
      $('#staffForm').show();
      $('#adminFormButton').removeClass('selected');
      $('#staffFormButton').addClass('selected');
    });
  
    $('#adminSubmitBtn').click(function(event) {
      console.log("Button clicked");
      event.preventDefault(); 
      const username = $('#Adminusername').val();
      const password = $('#Adminpassword').val();
      console.log(username);
      
  
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/login',
        data: JSON.stringify({ username: username, password: password, type:'admin'}),
        contentType: 'application/json',
        success: function(data) {
          if (data.success) {
            sessionStorage.setItem('loggedIn', 'true');
            window.location.href = 'admin';
          } else {
            alert('Invalid Admin credentials.');
          }
        },
        error: function(xhr, status, error) {
          if (xhr.status === 401) {
            alert('Invalid credentials. Please try again.');
          } else {
            alert('An unexpected error occurred. Please try again later.');
          }
        }
      });
    });
  
    $('#staffSubmitBtn').click(function(event) {
      console.log("Button clicked");
      event.preventDefault(); 
      const username = $('#Staffusername').val();
      const password = $('#Staffpassword').val();
  
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/login',
        data: JSON.stringify({ username: username, password: password, type:'staff'}),
        contentType: 'application/json',
        success: function(data) {
          if (data.success) {
            sessionStorage.setItem('loggedIn', 'true');
            window.location.href = 'staffhms';
          } else {
            alert('Invalid Staff credentials.');
          }
        },  error: function(xhr, status, error) {
          if (xhr.status === 401) {
            alert('Invalid credentials. Please try again.');
          } else {
            alert('An unexpected error occurred. Please try again later.');
          }
        }
      });
    });
  });
  
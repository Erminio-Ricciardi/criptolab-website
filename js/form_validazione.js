$(document).ready(function () {
    var form = $("#mailbox_form");
    var esito = $("#esito");
  
    $("#mail_send_button").on("click", function (e) {
      e.preventDefault();
      if (avvaloraForm()) {
        var formData = form.serialize();
  
        $.ajax({
          type: "POST",
          url: "/sendmail.php",
          data: formData,
          dataType: "json",
          statusCode: {
            200: handleSuccess,
            // Treat any non-200 response as an error
            "*": handleGenericError,
          },
        });
      }
    });
  
    function handleSuccess() {
      esito.html("Email Inviata").css("background-color", "#76bc6e");
      esito.addClass("drjekyll");
      //window.open("/index.html", "_self");
      console.log("Data send success");
    }
  
    function handleGenericError(xhr) {
      console.log("Error. Response Text:", xhr.responseText);
      esito.html("Error").css("background-color", "#d62c16");
    }
  
    function avvaloraForm() {
      var avvalora = true;
      var formElements = ["nome_input", "mail_input", "messaggio_input"];
  
      formElements.forEach(function (elementId) {
        var element = $("#" + elementId);
        if (element.val() === "") {
          element.attr("placeholder", "Inserire un valore valido");
          element.css("borderColor", "red");
          avvalora = false;
        } else {
          element.attr(
            "placeholder",
            elementId.charAt(0).toUpperCase() + elementId.slice(1)
          );
          element.css("borderColor", "green");
        }
      });
  
      return avvalora;
    }
  });
  
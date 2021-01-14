// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#burger-list").children("button").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {}
      }).then(
        function() {
          console.log("changed sleep to", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        console.log(event);
      var newBurger = {
        burger_name: $("#add-burger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
// I made this as an accidental duplicate of what is supposed to go into public/assets/js/burgers.js





// // Front end JS  ----------------------------------------
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevour = $(this).data("newdevour");
// // console.log(newDevour + " p/j/b.js")
//       var newDevourState = {
//         devoured: newDevour
//       };
  
//       // PUT --- Front end.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevourState
//       }).then(
//         function() {
//           // console.log("changed devour to", newDevour);
//           // Reload the page & update list on front end
//           location.reload();
//         }
//       );
//     });
  
//     // Add new burger to list.
//     $("#create-button").on("submit", function(event) {
//       event.preventDefault();
  
//       var newBurger = {
//         burger_name: $("#burg").val().trim(),
//         devoured: $("[name=devoured]:checked").val().trim()
//       };
  
//       // POST to the front end.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           // console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//           // console.log(newBurger);
//         }
//       );
//     });
//   });
  
// hey, all the things are here and loaded!

// selector!
$(document).ready(function(event) {
  // console.log("all things are loaded... thanks, yayQuery!");

  var btns = $('button');   // var btns = document.getElementsByTagName("button");
  // console.log(btns);

  var btn = $(btns)[0]; //  var btn = btns[0];
  // console.log(btn);

  var list = $('#todo-items');  // var list = document.getElementById("todo-items");
  var input = $('input[name="todo"]')[0];  // var input = document.getElementsByName("todo")[0];

  $(btn).on('click', function() {

    console.log(this);

    $(this).html("HOLY ASDASDADADASD");
    
    var html = $(list).html(); // return current HTML;

    // get the input's VALUE
    var currentValue = $(input).val(); // GET the VALUE from INPUT
    //var currentValue = $(input).prop('value');

    $(list).html(html + "<li>" + currentValue + "</li>");
    // list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
  });

});
//jQuery(document)

// window.onload = function() {
//
//   // // add a way to LISTEN to this button being clicked....
//   // btn.addEventListener('click', function() {
//   //   // console.log("ow, you clicked me. ow. ow ow.");
//   //   list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
//   //
//   // }
//   // );
//
//
// }// end onload

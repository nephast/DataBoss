
var newOptions = {
  "Option 1": "Rails",
  "Option 2": "Node",
  "Option 3": "Sinatra"
};





// var $el = $("#f1");
// $el.empty();
$(document).ready(function(){
  console.log("hi");
  var raw_data;
  $.getJSON("/data/raw_data.json", function(json){
      raw_data = json;
      $.each(raw_data.language, function(key, value) {
        console.log(key);
        console.log(value);
        console.log(raw_data.language);
        $("#language").append($('<option></option>').attr("value", key).append(value));
      });

  });



});


// one = newOptions["Option 1"]
//
// $(document).ready(function(){
//
//   $("#language").append($("<option>Hello</option>"));
//

// count how many options, and append them as options with the correct vals

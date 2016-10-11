$(document).ready(function() {
  $('select').material_select();

  $.fn.serializeObject = function() {
      var o = new UserSelection();
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      console.log(o);
      return o;
  };

  $(function() {
      $('form').submit(function() {
        $('form').serializeObject();
          return false;
      });
  });

});

$(document).ready(function() {
$('textarea').val('')
$('textarea').delay(1000).typetype(
'Welcome to Carnevale design \n Creating better websites for less',  {
    e: 0, // error rate. (use e=0 for perfect typing)
    t: 70, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  }
)
});

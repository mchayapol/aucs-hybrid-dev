var firstOp = 0;
var secondOp = 0;

function btn_click(digit) {
  var elem = document.getElementById('digits');
  console.debug(digit);
  var cur = elem.value;
  console.debug(typeof cur);
  elem.value = parseFloat(cur + digit);
  console.debug(elem.value);

  // JQuery
  //var cur = $('#digits').val();
  //$('#digits').val(cur + digit);
}

function btn_clear() {
  var elem = document.getElementById('digits');
  elem.value = '';
  // JQuery
  //$('#digits').val('');
}

function btn_add() {
  var elem = document.getElementById('digits');
  firstOp = parseFloat(elem.value);
  elem.value = '';
}

function btn_equal() {
  var elem = document.getElementById('digits');
  secondOp = parseFloat(elem.value);
  elem.value = firstOp + secondOp;
}
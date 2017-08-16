function btn_click(digit) {
  var elem = document.getElementById('digits');
  console.debug(digit);
  elem.value += digit;
  console.debug(elem.value);
}

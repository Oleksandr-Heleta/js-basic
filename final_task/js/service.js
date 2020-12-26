var items = document.getElementById("service_id");
var wrap = document.getElementById('wrapp');
var item = document.getElementById("item");
var closeBtn = document.getElementById("show_close");
// console.log(items);
var  selected;

items.onclick = function(event) {
    let target = event.target; // где был клик?
    // console.log(target);
  if (target.className != 'service__item') {
    target=event.target.closest(".service__item");
  };
    
    item.appendChild(target);
    // document.item.createElement(target);
    wrap.style.display = 'block'; 
  };
  
closeBtn.addEventListener('click', function() {
  var delItem = item.lastChild;
  items.appendChild(delItem);
  // item.removeChild(delItem);
  wrap.style.display = 'none';
  
}); 
// Пожалуйста подробную рецензию на этот скрипт и Ваш вариант решения!!!!! 
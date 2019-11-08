import {postData, putData} from './../requests';

let notReadyImgUrl = "https://image.flaticon.com/icons/png/512/53/53987.png";
let doneImgUrl = "https://st2.depositphotos.com/5777248/10629/v/950/depositphotos_106299224-stock-illustration-green-tick-check-mark-icon.jpg";

function checkClassName(params) {
  return params === "Ready" ? "ready" : "notReady";
}

function сheckStatusFood(params) {
  return params === "Ready" ? doneImgUrl : notReadyImgUrl;
}

function mealReady(event) {
  event.preventDefault();
  let parent = event.target.parentNode;
  event.target.src = doneImgUrl;
  parent.classList.remove('notReady');
  parent.classList.add('ready');
  let data = {
    orderId: parent.getAttribute('orderid'),
    mealId: event.target.getAttribute('mealid')
  };
  postData( '/barman/closemeal', data);
}


function orderReady(event) {
  event.preventDefault();
  let parent = event.target.parentNode,
      id = event.target.getAttribute('orderid'),
      item = parent.parentNode;
  

  putData(`/barman/closeorder/${id}`);
  item.remove();
  
}

export {
  сheckStatusFood,
  checkClassName, 
  mealReady,
  orderReady
};
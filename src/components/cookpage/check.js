import postData from './../requests/postData';
import putData from './../requests/putData';

let notReadyImgUrl = "https://image.flaticon.com/icons/png/512/53/53987.png";
let doneImgUrl = "https://img2.freepng.ru/20180730/fle/kisspng-check-mark-computer-icons-clip-art-action-symbol-5b5ea39e1743a4.3326126115329289260953.jpg";

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
  postData(data, '/cook/closemeal');
}


function orderReady(event) {
  event.preventDefault();
  let parent = event.target.parentNode,
      id = event.target.getAttribute('orderid'),
      item = parent.parentNode;
  

  putData(`/cook/closeorder/${id}`);
  item.remove();
  
}

export {
  сheckStatusFood,
  checkClassName, 
  mealReady,
  orderReady
};
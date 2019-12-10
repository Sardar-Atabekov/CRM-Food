import { postData, putData } from "./../requests";
import notReadyImgUrl from "./../images/notReady.svg";
import doneImgUrl from "./../images/ready.svg";

function checkClassName(params) {
  return params === "Ready" ? "ready" : "notReady";
}

function checkStatusFood(params) {
  return params === "Ready" ? doneImgUrl : notReadyImgUrl;
}

function mealReady(event) {
  event.preventDefault();
  let parent = event.target.parentNode;
  console.log(parent);
  event.target.src = doneImgUrl;
  parent.classList.remove("notReady");
  parent.classList.add("ready");
  let data = {
    orderId: parent.getAttribute("orderid"),
    mealId: event.target.getAttribute("mealid"),
    finishedQuantity:1
  };
  console.log(data);
  postData("/Cook/finishMeal", data);
}

function orderReady(event) {
  event.preventDefault();
  let parent = event.target.parentNode,
    id = event.target.getAttribute("orderid"),
    item = parent.parentNode;

  putData(`/cook/closeorder/${id}`);
  item.remove();
}


export { checkStatusFood, checkClassName, mealReady, orderReady };

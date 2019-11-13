import { postData, putData } from "./../requests";

let notReadyImgUrl = "https://image.flaticon.com/icons/png/512/53/53987.png";
let doneImgUrl =
  "https://st2.depositphotos.com/5777248/10629/v/950/depositphotos_106299224-stock-illustration-green-tick-check-mark-icon.jpg";

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
    mealId: event.target.getAttribute("mealid")
  };
  console.log(data);
  postData("/Cook/mealReady", data);
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

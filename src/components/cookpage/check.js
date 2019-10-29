


let notReadyImgUrl = "https://image.flaticon.com/icons/png/512/53/53987.png";
let doneImgUrl = "https://img2.freepng.ru/20180730/fle/kisspng-check-mark-computer-icons-clip-art-action-symbol-5b5ea39e1743a4.3326126115329289260953.jpg";


function сheckStatusFood(params) {
  let url = params === "Ready"?  doneImgUrl: notReadyImgUrl;
  return url;
}

export default сheckStatusFood;
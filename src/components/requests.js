let API = "https://neobiscrmfood.herokuapp.com/api";

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/offline.html");
}
let token;
if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
} else {
  // console.log(window.location);
  // console.log(localStorage.getItem("NotFound"));
  // if (localStorage.getItem("NotFound")) {
  //   localStorage.removeItem('NotFound');
  // } else
  if (window.location.pathname !== "/") {
    setTimeout(() => (window.location.href = "/"), 3000);
    // localStorage.removeItem('NotFound');
  }
}

async function getData(url) {
  try {
    let response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    let body = await response.json();
    return body;
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function postData(url, data) {
  let req = await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
}

async function putData(url, data) {
  console.log(JSON.stringify(data));
  let req = await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
}

async function deleteData(url) {
  await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.log("removed");
      console.log(res.json());
    })
    .catch(err => {
      console.error(err);
    });
}

export { getData, postData, putData, deleteData, API };

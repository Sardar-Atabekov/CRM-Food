async function getData(url) {
  try {
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJfTW9ub3BvbGlzdF8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIm5iZiI6MTU3Mzg5NTUzMSwiZXhwIjoxNTc1NjIzNTMxLCJpc3MiOiJDUk1TZXJ2ZXIiLCJhdWQiOiJDUk1Gb29kIn0.wVbel3bAQMx7NhKvCJ_BGPKMUJRnfSD1U5RJz2xr9Rk";
    let response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    let body = await response.json();
    return body;
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function postData(url, data, token) {
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJfTW9ub3BvbGlzdF8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ3YWl0ZXIiLCJuYmYiOjE1NzM4OTA0NjUsImV4cCI6MTU3Mzk3Njg2NSwiaXNzIjoiQ1JNU2VydmVyIiwiYXVkIjoiQ1JNRm9vZCJ9.gvci1D9uOl_ik0Vam1LQPFrKa4j57ooOXYdpP3giiKM";
  await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

async function putData(url, data, token) {
  console.log(JSON.stringify(data));
  await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => console.log(res.json()))
    .catch(err => {
      console.error(err);
    });
}

async function deleteData(url, token) {
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

export { getData, postData, putData, deleteData };

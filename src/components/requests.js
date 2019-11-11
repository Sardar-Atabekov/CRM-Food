async function getData(url) {
  try {
    let response = await fetch(`${url}`);
    let body = await response.json();
    return body;
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function postData(url, data) {
  console.log(data);
  try {
    await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(JSON.stringify(data));
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function putData(url, data) {
  console.log(JSON.stringify(data));
  await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res =>  console.log(res.json()))
    .catch(err => {
      console.error(err.json());
    });
}

async function deleteData(url) {
  await fetch(`https://neobiscrmfood.herokuapp.com/api${url}`, {
    method: "DELETE"
  })
    .then((res) => {
      console.log("removed");
      console.log(res.json());

    })
    .catch(err => {
      console.error(err.json());
    });
}

export { getData, postData, putData, deleteData };

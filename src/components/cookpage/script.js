
const getResource = async(url)=> {
    const res = await fetch(url, {method: 'GET'});
    const body = await res.json();
    return body;
  }
  
  getResource('https://neobiscrmfood.herokuapp.com/api/cook/getactiveorders')
    .then((body)=> {
      console.log('cook: ', body);
     // body.map(a=>a.meals.map(a=>console.log(a.name)));
      
    });

  getResource('https://neobiscrmfood.herokuapp.com/api/departments')
    .then((body)=> {
        console.log('Departament: ', body);
    });

   getResource('https://neobiscrmfood.herokuapp.com/api/categories')
    .then((body)=> {
        console.log('categorie: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/mealorderstatus')
    .then((body)=> {
        console.log('mealorderstatus: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/meals')
    .then((body)=> {
        console.log('meals: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/orders/')
    .then((body)=> {
        console.log('orders: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/orderstatus/')
    .then((body)=> {
        console.log('orderstatus: ', body);
    });
    
    getResource('https://neobiscrmfood.herokuapp.com/api/roles/')
    .then((body)=> {
        console.log('roles: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/tables/')
    .then((body)=> {
        console.log('tables: ', body);
    });

    getResource('https://neobiscrmfood.herokuapp.com/api/users/')
    .then((body)=> {
        console.log('users: ', body);
    });
    
    getResource('https://neobiscrmfood.herokuapp.com/api/waiter/getorders/')
    .then((body)=> {
        console.log('waiter get order: ', body);
    });
    
    let formData={
        orderId: 9,
        mealId: 6
      };

    postData('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', formData)
    .then(data => console.log(JSON.stringify(data))) // JSON-строка полученная после вызова `response.json()`
    .catch(error => console.error(error));

    function postData(url, data) {
  // Значения по умолчанию обозначены знаком *
    return fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        // cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.json()); // парсит JSON ответ в Javascript объект
}

    // const putMethod = {
    //     method: 'POST', // Method itself
    //     headers: {
    //      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    //     },
    //     body: JSON.stringify(formData) // We send data in JSON format
    //    };
    
    //    console.log(putMethod.body);
    //    fetch('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', putMethod)
    //    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    //    .catch(err => console.log(err))// Do something with the erro
    // (async () => {
    //     const rawResponse = await fetch('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin" : "*", 
    //         "Access-Control-Allow-Credentials" : true 
    //       },
    //       body: JSON.stringify({orderId: 9, mealId: 6})
    //     });
    //     const content = await rawResponse.json();
      
    //     console.log(content);
    //   })();
    // var payload = {
    //     orderId: 9, 
    //     mealId: 6
    // }
    
    // var data = new FormData();
    // data.append( "json", JSON.stringify( payload ) );
    
    // fetch("https://neobiscrmfood.herokuapp.com/api/cook/closemeal",
    // {
    //     method: "POST",
    //     body: data
    // })
    // .then(function(res){ return res.json(); })
    // .then(function(data){ console.log( JSON.stringify( data ) ) })


    // function createNewProfile(profile) {
    //     const formData = new FormData();
    //     formData.append('orderId', profile.orderId);
    //     formData.append('mealId', profile.mealId);
        
    
    //     return fetch('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', {
    //         method: 'POST',
    //         body: formData
    //     }).then(response => response.json())
    // }
    
    // createNewProfile(a)
    //    .then((json) => {
    //        console.log(json);
    //     })
    //    .catch(error => error);
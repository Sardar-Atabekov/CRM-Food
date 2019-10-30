

// const getResource = async(url)=> {
//     try {
//         let response = await fetch(url, {method: 'GET', headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }});
//         let body = await response.json();
//         console.log(body);
//         return body;
//       } catch(err) {
//         console.log(err); // TypeError: failed to fetch
//       }
//   }

async function getResource(name) {
    try {
        // let response = await fetch(`https://neobiscrmfood.herokuapp.com/api/${name}`);
        let response = await fetch(`${name}`);
        let body = await response.json();
        return body;
      } catch(err) {
        console.log(err); // TypeError: failed to fetch
    }
 
}
  
    
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
        orderId: 13,
        mealId: 5
      };








//     const putMethod = {
//         method: 'POST', // Method itself
//         headers: {
//          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//         },
//         body: JSON.stringify(formData) // We send data in JSON format
//        };
    
//        console.log(putMethod.body);
//        fetch('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', putMethod)
//        .then(() => console.log(formData)) // Manipulate the data retrieved back, if we want to do something with it
//        .catch(err => console.log(err))// Do something with the erro
    // (async () => {
    //     const rawResponse = await fetch('https://neobiscrmfood.herokuapp.com/api/cook/closemeal', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({orderId: 12, mealId: 9})
    //     });
        
      
       
    //   })();

    async function postData(data, url) {
      
        const rawResponse = await fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        });
    };
    postData({orderId: 4, mealId: 2}, 'https://neobiscrmfood.herokuapp.com/api/cook/closemeal');
    

    async function putData(url) {
      
        const rawResponse = await fetch(url, {
            method:'PUT'
        });
    };
    putData('https://neobiscrmfood.herokuapp.com/api/cook/closeorder/8');

    
    

   
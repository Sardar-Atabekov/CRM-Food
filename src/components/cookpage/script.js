
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

    
    
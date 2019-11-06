

async function postData(url, data) {
    
    try {
        let API = 'https://neobiscrmfood.herokuapp.com/api' + url; 
        await fetch(API, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
        });
      } catch(err) {
        console.log(err); // TypeError: failed to fetch
    }
};


export default postData;
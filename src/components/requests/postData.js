

async function postData(data, url) {
    let API = 'https://neobiscrmfood.herokuapp.com/api' + url; 
    await fetch(API, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    });
};


export default postData;
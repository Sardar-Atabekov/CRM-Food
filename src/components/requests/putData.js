

async function putData(url, id ='') {
    let API = "https://neobiscrmfood.herokuapp.com/api"+url;
    await fetch(API, {
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
};


export default putData;
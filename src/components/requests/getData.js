

async function getData(url) {
    try {
        let response = await fetch(`${url}`);
        let body = await response.json();
        return body;
      } catch(err) {
        console.log(err); // TypeError: failed to fetch
    }
 
}

export default getData;
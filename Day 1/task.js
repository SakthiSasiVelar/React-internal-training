
async function fetchData(){
    try{
        const response = await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user');
        if(!response.ok){
           throw new Error(response.statusText);
        }
        const data = await response.json();
        const ansObject = data.find((obj) => obj.id === '8');
        if(ansObject){
            console.log(ansObject.name);
        }
        else{
            throw new Error('Id 8 not available');
        }
    }
    catch(error){
        console.log(error);
    }
    
}

fetchData();
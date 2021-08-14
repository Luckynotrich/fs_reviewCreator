

async function readCat() {
    
    
        const rawResponse = await fetch("http://localhost:8080/api/categories?",{
            method: 'GET',
            //mode:'no-cors',
            credentials:'same-origin',
            headers: {
                'Content-Type': 'application/json'
             }
        },
        
    );
    const content = rawResponse.json();

    return content;
}

export default readCat

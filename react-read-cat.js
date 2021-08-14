// import React from "react";

// function reactReadCat({categories}){

React.useEffect(()=>{
    fetch('/api/categories')
    .then((res) => {return res.json()})
    .catch(err => {console.log(err)})
    .then((data) => setCategories(data))
})

// }
// export default reactReadCat;
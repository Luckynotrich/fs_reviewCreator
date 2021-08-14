
import Option from "./option.js"

const Select = ({categories, onSelect}) => {
    
   
  
    return (
        <>
        
            <select name="selectCat" id="selectCat" onChange={onSelect}>

            <option value="" defaultValue>Choose a Category</option>
            
            {categories && categories.map((option) => (
            
            <Option 
            key={option.id} 
            text={option.name} 
            value={option.id}/>))}

            </select>
            
            </>
        
    )
}

export default Select

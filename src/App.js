import {useState} from "react";
import { hot } from 'react-hot-loader/root'
import Header from "./components/header";
import Select from "./components/select.js";
import ProsCons from "./components/pros-cons.js";


function App(){
    const [catState,setCatState] = useState("");
    const [catPros, setCatPros] =  useState([]);
    const [catCons, setCatCons] =  useState([]);

    const [categories, setCategories] = useState([
            {
                id: 1,
                name:'Restaurant',
                pros:['Great Menu, good food, Great Beer list, live music'],
                cons:['Bad acoustics, bad service, rude staff, over priced']
            },
            {
                id: 2,
                name:'Music Venue',
                pros:['Good seating, Music Variety, Good Dance Floor, Good Bar, Good Food'],
                cons:['Bad acoustics, bad crowd, small space, over priced']
            },
            {
                id: 3,
                name:'Hiking Trail',
                pros:['Spectacular Scenery, Great Destination, Swimming, Drinking Water'],
                cons:['Crowded, Horses/Bicycles, Burn Zone, Biting Bugs']
            }
        ]);   
         
    const chooseCat = (e) => {
        const id = e.target.value;
        const selectedCat = categories.filter((cat) => cat.id == id)[0];
        if(selectedCat){
            const selectedPros = selectedCat.pros[0].split(',');
            const selectedCons = selectedCat.cons[0].split(',');
            setCatState(selectedCat);
            setCatPros(selectedPros);
            setCatCons(selectedCons);
        };
}
    return(
        <div className="container">
            
            <Header />
            <form>
             
            {categories.length > 0 ?
              <Select categories={categories}
                onSelect={chooseCat}
              />:' No Options'}
              {catState && <ProsCons pros={catPros} cons={catCons}/>}
                
            
            </form>
        </div>
    )
}
export default hot(App);

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
const App = () => {
  const [city, setcity] = useState([]);
  const [search, setsearch] = useState("");
  function input(e) {
    setsearch(e.target.value);
  }
  useEffect(() => {
      const fetchApi = async () => {
        const url = `https://api.thedogapi.com/v1/breeds/search?q=${search}&api_key=0dbf6e72-131d-4aea-bfc5-1a47d2dcf958`;
        const response = await fetch(url);
       const resJson = await response.json();
       setcity(resJson[0])
      };
      fetchApi();
  },[search]);
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center mt-5"><strong style={{color:"darkred"}}>Dog Breeds</strong></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center mt-4">
            <select id="mySelect" onChange={input} style={{padding:"10px"}}>
            <option >--Choose dog's breed--</option>
              <option value="Affenpinscher">Affenpinscher</option>
              <option value="Afghan Hound">Afghan Hound</option>
              <option value="Basset Hound">Basset Hound</option> 
              <option value="Airedale Terrier">Airedale Terrier</option>
              <option value="Akbash Dog">Akbash Dog</option>
              <option value="Akita">Akita</option>
              <option value="Alaskan Husky">Alaskan Husky</option>
              <option value="Alaskan Malamute">Alaskan Malamute</option>
              <option value="Alapaha Blue Blood Bulldog">Alapaha Blue Blood Bulldog</option>
              <option value="Basset Bleu de Gascogne">Basset Bleu de Gascogne</option>
              <option value="Basenji">Basenji</option>
              <option value="American Foxhound">American Foxhound</option>
              <option value="American Pit Bull Terrier">American Pit Bull Terrier</option>
              <option value="American Water Spaniel">American Water Spaniel</option>
              <option value="Anatolian Shepherd Dog">Anatolian Shepherd Dog</option>
              <option value="Australian Terrier">Australian Terrier</option>
              <option value="Australian Cattle Dog">Australian Cattle Dog</option>
              <option value="Australian Kelpie">Australian Kelpie</option>
              <option value="Australian Shepherd">Australian Shepherd</option>
              <option value="Azawakh">Azawakh</option>
              
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center mt-4">
          {
      !city?( <h2 style={{color:"darkpurple"}}>No Data Found</h2> ):
      (
        <>
        <h2 className="aquase">ID : <span className="aquas">{city.id}</span></h2>
            <h2 className="aquase">Bred for : <span className="aquas">{city.bred_for}</span></h2>
            <h2 className="aquase">Life Span : <span className="aquas">{city.life_span}</span></h2>
            <h2 className="aquase"> Breed group :<span className="aquas">{city.breed_group}</span></h2>
            <h2 className="aquase">Temperament : <span className="aquas">{city.temperament}</span></h2>
            <h2 className="aquase">Reference Id : <span className="aquas">{city.reference_image_id}</span></h2>
           
</> 
     )
    }
          </div>
        </div>
      </div>
      
    </>
  );
};
export default App;




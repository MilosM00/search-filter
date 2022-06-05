import React from "react";
import Name from "./components/Name";
import jsonData from "./MOCK_DATA.json";

const App = () =>{

    const [search, setSearch] = React.useState("");
    
    const change = (e) =>{
        setSearch(e.target.value);
    };
    
    const data = jsonData.filter(x =>{
        if(search === ``) return x;

        else if(x.first_name.toLowerCase().includes(search.toLowerCase())) return x;
        
    }).map(x => <p key={x.id}>{x.first_name} {x.last_name}</p>);
    
    return(

        <div>
            <Name 
                data={data}
                change={change}
            />
        </div>

    );
};

export default App;
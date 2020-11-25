import React,{useState} from "react";
import Header from "./Header";
//import Note from "./auth/helper/index.js";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Home=()=>
{
    const[addItem,setAddItem]=useState([]);
    const addNote=(note)=>
    {
        setAddItem((prevData)=>{
            return[...prevData,note];
        });
    };


    const onDelete=(id)=>{

        setAddItem((olddata)=>
        olddata.filter((currdata,indx)=>
        {
            return indx!==id;
        })
        )

    };
    
    return <>
        
        
        <CreateNote passNote={addNote}/>
        <div className="container">
        <div className="row ">
            
        {addItem.map((val,index)=>
        {
            return( <Note key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                    />
            );
        })}
        </div> 
        </div>
        
        
     </>;
}

export default Home;
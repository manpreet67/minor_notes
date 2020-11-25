import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>
{
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    
    const InputEvent=(event)=>{

        const {name,value}=event.target;
        
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value, 
            }
        }
        );
        console.log(note);
    };

    const addEvent=()=>
    {
        props.passNote(note);
        
        setNote(
            {
                title:"",
                 content:"", 
            }
        )
    };
    const isEnabled = note.title.length > 0 && note.content.length > 0;
    
    return  (<> 
       
        <div className="container">
            <div className="row">
                <div className="col">

                
                <div className="card text-center text-white bg-info mb-3" style={{ width: '20rem' }}>
                <div className="card-body">
                    <form>
                    <div className="form-group">

                        <input type="text" className="form-control" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                    </div>
                    <div className="form-group">
                
                        <textarea className="form-control" rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write here"></textarea>
                        </div>
                        
                            
                     
                    <Button disabled={!isEnabled} onClick={addEvent}>
                    <AddIcon className="plus"/>
                    </Button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
                
    
    </>
    );
};

export default CreateNote;
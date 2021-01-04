import React,{useEffect,useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import fetch from "../utils/apiClient"

// const SERVER = "http://985c4acdebe2.ngrok.io/"

// async function getLabelsfunc(id) {
//     try {
//         const url = SERVER + "labels";
//         const data = { id: id }
//         const resp = await fetch.post(url, data)
//         return resp
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// }

const Note = (props) => {

    // const [labels, getlabels] = useState([])
    

    const deleteNote = () => {
        props.deleteItem(props.id, props.apiId);
    }
    // const labelNote=()=>{
       
    //       return(  <span class="badge badge-secondary">ab</span>);

        
    // }
    // useEffect(() => {
    //     getLabelsfunc(props.apiId).then(data=>{
    //         getlabels(data.data.labels)
    //         console.log(labels)
    //     })
    // })
        
    return <>





        <div className="card text-center text-dark bg-light" style={{ width: '20rem' }}>
            <div className="card-body">

                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                {/* {console.log(props.label)} */}
                <br/>
                {props.label!==undefined &&(
                    <h4> 
                      {
                        
                       props.label.map((val,idx)=>{
                    
                        // console.log(val)
                        return(
                            <div className="mx-3">
                            <span key={idx} className="badge badge-dark"> {val}</span>
                            </div>
                            
                            )
                        })
                    // window.location.reload(false)
                        
                      
                 
                    }  
                    </h4>
                    

                )}
                
                <button className="btn" onClick={deleteNote}>
                    <DeleteIcon className="del"> </DeleteIcon>
                </button>
            </div>

        </div>



    </>
}

export default Note;
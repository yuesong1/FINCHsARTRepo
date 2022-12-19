import React, {Component} from "react"
import { getFormUploadURL } from "../Util/Url";
class FormUpload extends Component{
 
 submit=(e)=>{
    e.preventDefault();
    let formData =new FormData(e.target);
    fetch(getFormUploadURL(),{
        method:"POST",
        body:formData
    }).then(response=>console.log(response))
 }
    render(){
    return <div>
        <form onSubmit={this.submit}>
        
        <input type="file" name="file"/>
        <input type="submit" value="Upload"/>
        </form>
        </div>
}
}
export default FormUpload;


 
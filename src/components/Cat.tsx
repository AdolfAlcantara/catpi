import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { CatActions } from "../models/actions/CatActions";
import {  Kitty } from "../models/Cat";
import {dbAddKitty} from "../actions/CatActions"

const CatComponent:React.FC<{id:string,url:string}> = ({id,url}) =>{

    const dispatch = useDispatch<Dispatch<CatActions>>()

    const saveKitty = (e:React.MouseEvent) =>{
        e.preventDefault();
        dbAddKitty(dispatch,{dbId:"",id,url});
    }

    return(
        <div>
        <div>
            <h3>{id}</h3>
            <a href={url}>{url}</a>
        </div>
        <button className="add-button" onClick={(e)=>saveKitty(e)}>Like</button>
        </div>
    )
}

export default CatComponent;
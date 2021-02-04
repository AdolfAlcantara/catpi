import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { CatActions } from "../models/actions/CatActions";
import {  Kitty } from "../models/Cat";
import {dbAddKitty} from "../actions/CatActions"

const CatComponent:React.FC<Kitty> = ({id,url}) =>{

    const dispatch = useDispatch<Dispatch<CatActions>>()

    const saveKitty = (e:React.MouseEvent) =>{
        e.preventDefault();
        dbAddKitty(dispatch,{id,url});
    }

    return(
        <div>
            <h3>{id}</h3>
            <a href={url}>{url}</a>
            <button onClick={(e)=>saveKitty(e)}>Like</button>
        </div>
    )
}

export default CatComponent;
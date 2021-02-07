import { Dispatch, MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { CatActions } from "../models/actions/CatActions"
import {dbRemoveKitty} from "../actions/CatActions"
import { Kitty } from "../models/Cat";

const KittyComponent:React.FC<Kitty> = ({id,dbId, url}) =>{

    const dispatch = useDispatch<Dispatch<CatActions>>();

    const RemoveKitty = (e:MouseEvent,kittyId:string) =>{
        dbRemoveKitty(dispatch,kittyId);
    }

    return (
        <div className="kitty-subcontainer">
            <h3>{id}</h3>
            <img className="kitty-image" src={url} alt="gatito"/>
            <button className="remove-button" onClick={(e:MouseEvent)=>RemoveKitty(e,dbId)}>
                Remove
            </button>
        </div>
    )

}

export default KittyComponent;
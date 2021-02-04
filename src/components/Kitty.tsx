import { Dispatch, MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { CatActions } from "../models/actions/CatActions"
import { Kitty } from "../models/Cat";

const KittyComponent:React.FC<Kitty> = ({id, url}) =>{

    const dispatch = useDispatch<Dispatch<CatActions>>();

    const RemoveKitty = (e:MouseEvent,kittyId:string) =>{
        dispatch({
            type:"RemoveKitty",
            id:kittyId
        });
    }

    return (
        <div>
            <h3>{id}</h3>
            <img src={url} alt="gatito"/>
            <button onClick={(e:MouseEvent)=>RemoveKitty(e,id)}>
                Remove
            </button>
        </div>
    )

}

export default KittyComponent;
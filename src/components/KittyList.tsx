import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import KittyComponent from '../components/Kitty';
import {RootState} from "../reducer/RootReducer";
import {dbGetKitties} from "../actions/CatActions"
import { CatActions } from "../models/actions/CatActions";


const KittyList = () =>{

    const kitties = useSelector((state:RootState) => state.kitties.kitties);
    const dispatch = useDispatch<Dispatch<CatActions>>();
    
    useEffect(() => {
        dbGetKitties(dispatch);
    }, [])

    return(
        <div>
            <h1>Saved Kitties</h1>
            {   
                kitties.map(kitty => <KittyComponent id={kitty.id} url={kitty.url}/>)
            }
        </div>
    )

}

export default KittyList;
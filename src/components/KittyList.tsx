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

    useEffect(() => {
        console.log(kitties)
    }, [kitties])

    return(
        <div>
            <h1 className="subheader">Saved Kitties</h1>
            <div className="kitty-container">
                {   
                    kitties.map(kitty => <KittyComponent id={kitty.id} dbId={kitty.dbId} url={kitty.url}/>)
                }
            </div>
        </div>
    )

}

export default KittyList;
import { CatActions } from '../models/actions/CatActions';
import {KittyState} from '../models/Cat';

const KittyDefaultReducerState: KittyState = {
    kitties:[]
}

const KittyReducer = (state = KittyDefaultReducerState, action:CatActions): KittyState  =>{
    switch(action.type){
        case "AddKitty":{
            const existingKitty = state.kitties.find(x=>x.id === action.kitty.id);
            if(existingKitty === undefined){
                return {
                    kitties:[...state.kitties,action.kitty]
                }
            }else{
                return state
            }
        }
        case "RemoveKitty":{
            return {
                kitties:state.kitties.filter(x=>x.dbId !== action.id)
            }
        }
        case "Set_Kitties":{
            return{
                kitties:[...action.kitties]
            }
        }
        default:{
            return state;
        }
    }
}

export default KittyReducer;
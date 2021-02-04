import { Kitty } from "../Cat";

export const ADD_KITTY  = "AddKitty"
export const REMOVE_KITTY = "RemoveKitty"
export const SET_KITTIES = "Set_Kitties"

interface SetKitties{
    type:typeof SET_KITTIES
    kitties:Kitty[]
}

interface AddKitty{
    type:typeof ADD_KITTY
    kitty:Kitty
};

interface RemoveKitty{
    type:typeof REMOVE_KITTY
    id:string
}

export type CatActions = AddKitty | RemoveKitty | SetKitties
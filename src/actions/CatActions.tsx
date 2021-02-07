import { ADD_KITTY, CatActions, REMOVE_KITTY, SET_KITTIES } from '../models/actions/CatActions';
import {Kitty} from '../models/Cat';
import database from '../firebase/firebase';
import { Dispatch } from 'react';
import { readConfigFile } from 'typescript';

export const SetKitties = (kitties:Kitty[]):CatActions =>({
    type: SET_KITTIES,
    kitties
})

export const dbGetKitties = (dispatch:Dispatch<CatActions>) =>{
    database.ref(`cats`)
            .once('value')
            .then((snapshot)=>{
                const kitties:Kitty[] = [];
                snapshot.forEach((child)=>{
                    kitties.push({
                        ...child.val(),
                        dbId: child.key
                    })
                });
                dispatch({
                    type:"Set_Kitties",
                    kitties
                })
            })
}

export const AddKitty = (kitty:Kitty):CatActions =>({
    type: ADD_KITTY,
    kitty
})

export const dbAddKitty = (dispatch:Dispatch<CatActions>,kitty:Kitty) =>{
    // const saveKitty = (dispatch:Dispatch<CatActions>) => {
    //     console.log("start");
        database.ref(`cats`)
        .push(kitty)
        .then((ref)=>{
            dispatch(AddKitty({
                ...kitty,
                dbId:ref.key?ref.key:kitty.id
            }))
        })
        .catch((e)=>{
            console.log(e);
        })
    // }
    // saveKitty(dispatch);
}


export const RemoveKitty = (id:string):CatActions=>({
    type:REMOVE_KITTY,
    id
})


export const dbRemoveKitty = (dispatch:Dispatch<CatActions>,id:string) =>{
    // const remove = (dispatch:Dispatch<CatActions>) =>{
        console.log(id)
        database.ref(`cats/${id}`)
        .remove()
        .then(()=>{
            dispatch(RemoveKitty(id));
        })
        .catch((e)=>{
            console.log(e);
        })
    // }
    // remove(dispatch);
}
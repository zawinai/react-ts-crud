import { initialState } from './intialstates'
import { actionTypes } from './typesInterfaces'



export const appReducer = (state : typeof initialState, action : actionTypes) => {    

     function saveData <T>(key : string, value : T) {
          
          localStorage.setItem(key, JSON.stringify(value))
     }

     switch(action.type){
          case "formSubmit":{
               saveData('notes', [...state.notes, action.payload])
               return {...state, notes : [...state.notes, action.payload]}
          }
          case "setTags":{
               saveData('tags', [...state.tagList, action.payload])
               return {...state, tagList : [...state.tagList, action.payload]}
          }
          case "selectTags":
               return {...state, selectTags : action.payload}
               
          case "updateNote":{
               saveData('notes',  action.payload)
               return {...state, notes : action.payload}
          }
          
          case "deleteNote":{
               
               state.notes = state.notes.filter((note) => note.id !== action.payload) 
               saveData('notes',  state.notes)
               return {...state, notes : state.notes}
          }

          case "setTitle":
               return {...state, title : action.payload}
          default:
               return state
     }
}


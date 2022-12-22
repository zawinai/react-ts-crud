import { initialStateTypes } from "./typesInterfaces"

const data = localStorage.getItem('notes')
const tagData = localStorage.getItem('tags')

export const initialState : initialStateTypes = {
     title : "",
     markdown : "",
     notes : typeof data === 'string' ? JSON.parse(data) : [], 
     tagList : typeof tagData === 'string' ? JSON.parse(tagData) : [], 
     selectTags : [],
}

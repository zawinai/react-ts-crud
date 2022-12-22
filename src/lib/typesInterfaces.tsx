import React from "react";

export interface AppProviderProps {
     children : React.ReactNode
}

export type actionTypes =  { type : "formSubmit" , payload : NoteData}
                    | { type : "setTags", payload : Tag}
                    | { type : "setTitle", payload : string} 
                    | { type : "selectTags", payload : Tag[] }
                    | { type : "updateNote", payload : NoteData[] }
                    | { type : "deleteNote" , payload : string}


export type Note = {
     id : string 
     & NoteData
}

export type NoteData = {
     id : string,
     title : string,
     markdown : string,
     tags : Tag[]
}

export type Tag = {
     id : string,
     label : string
}

export type NoteFormType = {
     onSubmit : (data : NoteData) => void
}

export type unsavedNote = {
     id : string,
     markdown : string,
     tagIds : string[]
}

export type initialStateTypes = {
     title : string,
     markdown : string,
     notes : NoteData[] | [],
     tagList : Tag[],
     selectTags : Tag[] 
}


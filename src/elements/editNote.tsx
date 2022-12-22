import { useEffect, useRef, FormEvent, useContext } from 'react'
import { AppContext } from '../lib/context';

import Creatable from 'react-select/creatable';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import { v4 as uuidV4 } from "uuid"

import { NoteData } from '../lib/typesInterfaces';

const EditNote = () => {

    const noteToEdit : NoteData = useOutletContext()

    const { title, markdown, tags, id } = noteToEdit
    
    const { state, dispatch } = useContext(AppContext)
    
    const { selectTags, tagList } = state

  const titleRef = useRef<HTMLInputElement>(null)
  const mdRef = useRef<HTMLTextAreaElement>(null)

  const navigate = useNavigate()

  useEffect(() => {

    dispatch({ type : "selectTags", payload : tags.map(tag => {return { label : tag.label, id : tag.id }})})

},[])


  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()

    const update = state.notes.map((note) => note.id === id ? 
    
    {...note, title : titleRef.current!.value, markdown : mdRef.current!.value, tags : selectTags.map(tag => {
        return { id : tag.id, label : tag.label}})} : note )

    dispatch({type : "updateNote", payload : update })

    dispatch({ type : "selectTags", payload : []})

    navigate("..")
  }

  return (
    <div className='max-w-[900px] bg-slate-500 min-h-screen p-10 mx-auto text-slate-200'>
      <h1 className='text-5xl '>
        Edit Note
      </h1>

      <form action="" className='mt-5 flex flex-col justify-between gap-14' onSubmit={handleSubmit}>

        {/* Title Tags */}

        <div className='flex flex-row items-center justify-between'>

          <div className='flex flex-col gap-5'>
            <label htmlFor="Title">
              Title
            </label>
            <input ref={titleRef} type="text" placeholder='Title' defaultValue={title}  className='w-full p-2 border-slate-300 rounded-md outline-none text-slate-800 focus:border focus:border-blue-800 imset' required/>
          </div>

          <div className='flex flex-col gap-5 w-48'>

            <label htmlFor="Tags">Tags</label>

            <Creatable 

              onCreateOption={label => {
                const newTag = { id : uuidV4(), label }
                dispatch({type : "setTags", payload : newTag})
                dispatch({ type : "selectTags", payload : [...selectTags, newTag]})
              }}

              value={selectTags.map(tag => {
                return { label : tag.label, value : tag.id }
              })}

              options={tagList.map(tag => {
                return { label : tag.label, value : tag.id}
              })}

              onChange={tags => {
                dispatch({ type : "selectTags", payload : tags.map(tag => {return { label : tag.label, id : tag.value }})})
              }}

            isMulti

            className='bg-slate-400 text-slate-900'
            />

          </div>

        </div>

        {/* Body */}
        <div>
            <textarea ref={mdRef} defaultValue={markdown} className='w-full h-[300px] text-slate-800 p-2 rounded-md outline-none focus:border focus:border-blue-800' required/>
        </div>

        <div className='self-start flex flex-row items-center gap-5'>
            <button className='bg-blue-800 p-2 rounded-xl border border-blue-800' type='submit'>Update</button>
            <Link to="..">
              <button className='border border-slate-300 p-2 rounded-xl' type='button'>Cancel</button>
            </Link>
        </div>
      </form>
    </div>
  )
}

export default EditNote
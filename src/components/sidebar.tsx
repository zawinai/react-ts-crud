import { Link } from 'react-router-dom';
import { Dispatch, useContext, SetStateAction } from 'react';
import { BsSearch } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

import { AppContext } from '../lib/context';

import Creatable from 'react-select/creatable';
import { v4 as uuidV4 } from "uuid"

type propType = {
  title : string,
  setTitle : Dispatch<SetStateAction<string>>
}


const Sidebar = ({title, setTitle} : propType ) => {

  const { state, dispatch } = useContext(AppContext)

  const { selectTags, tagList } = state

  return (
     <aside className='bg-slate-400 hidden  h-[400px] w-[220px] md:flex flex-col justify-center gap-10 p-5'>

       <Link to="/add" className='self-center cursor-pointer shadow-lg border border-slate-200 p-4 rounded-lg active:scale-95 active:shadow-none'>
          <abbr title="Add New Note">
            <TfiWrite className='text-slate-200 w-10 h-auto'/>
          </abbr>
       </Link>

      <div className=''>
         
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Search
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm ">
                <BsSearch/>
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full h-[40px] text-slate-900 rounded-md border-gray-300 pl-7 pr-12 active:outline-none active:border-none  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search"
              value ={title}
              onChange={(e) => setTitle(e.target.value) }
            />

          </div>
        </div>
      </div>

           
        <div className=''>
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

   </aside>
  )
}

export default Sidebar
import { useState, useContext } from 'react'
import { BsJournalText, BsSearch } from "react-icons/bs";
import { AppContext } from '../lib/context';
import { Link } from 'react-router-dom';
import Creatable from 'react-select/creatable';
import { BsChevronLeft } from "react-icons/bs";


const Header = () => {

  const { state, dispatch } = useContext(AppContext)

  const {selectTags, tagList} = state

  const [ open, setOpen ] = useState<boolean>(false)

  return (
    
     <header className='min-w-[300px] '>

      {/* Mobile */}

      <div style={open ? {visibility : "visible"} : {visibility : "hidden"}} >
        <form action="" className="w-full flex flex-row items-center justify-center gap-5 z-10 min-w-[400px] ">
          <button type='button' onClick={() => setOpen(false)}>
            <BsChevronLeft className='text-slate-200 font-extrabold'/>
          </button>
          <input type="text" placeholder='Search' className='w-full h-[35px] px-2'/>
          <Creatable 

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

              className='bg-slate-400 text-slate-900 w-full'
            />
        </form>
      </div> 
      
      <div className='flex flex-row justify-between items-center md:justify-center' style={ open ?  {visibility : "hidden"} : {}}>
        <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 to-rose-300 '>
          <b className='text-center '>Notes</b>
        </h1>
        <div className='flex flex-row items-center gap-10 md:hidden text-slate-200 text-xl'>
          <Link to="/add">
          <BsJournalText/>
          </Link>
          <button onClick={() => setOpen(true)}>
            <BsSearch/>
          </button>
        </div>
      </div>

   </header>
  )
}

export default Header
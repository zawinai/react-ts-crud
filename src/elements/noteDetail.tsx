import { useOutletContext, Link, useNavigate } from 'react-router-dom'
import { NoteData } from '../lib/typesInterfaces'
import { AiOutlineRollback, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useContext } from 'react'
import { AppContext } from '../lib/context';

import ReactMarkdown from 'react-markdown';

const ShowNote = () => {

  const  {title, tags, id, markdown} : NoteData  = useOutletContext()

  const { dispatch } = useContext(AppContext)

  const navigate = useNavigate()

  const onDelete = () => {
    dispatch({type : "deleteNote", payload : id})

    navigate('/')
  }

    return (
      <div className='max-w-[900px] bg-slate-500 min-h-screen mx-auto text-slate-200'>
        <div className='bg-slate-700 flex flex-row items-center justify-between text-xl p-5'>
          <abbr title="Back">
            <Link to="..">
              <AiOutlineRollback className='text-3xl cursor-pointer'/>
            </Link>
          </abbr>
          <div className='flex flex-row gap-20'>
            <abbr title="Edit">
              <Link to="edit">
                <AiFillEdit/>
              </Link>
            </abbr>
            <abbr title="Delete">
              <button className='text-rose-500' onClick={() => onDelete()}>
                <AiFillDelete/>
              </button>
            </abbr>
          </div>
        </div>
        <div className='p-10'>
          <div>
            <h1 className='text-4xl my-4'>{title}</h1>
            <ul className='flex flex-row flex-wrap gap-5'>
              {
                tags.map(({label, id}) => (
                  <li key={id} className="bg-slate-300 text-slate-900 rounded-lg py-1 px-2 hover:bg-slate-200 cursor-pointer">
                    {label}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='mt-10 '>
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    )

}

export default ShowNote
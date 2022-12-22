import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NoteData } from '../lib/typesInterfaces';
import { Link } from 'react-router-dom';
import { useRef } from "react";


export const Card = ({title, tags, markdown, id} : NoteData) => {


  const ulRef = useRef<HTMLUListElement>(null)


  return (
    <div className='bg-slate-800 flex flex-col justify-between w-[230px] h-[180px] overflow-hidden px-2 py-5 rounded-md cursor-pointer'>
      <Link to={`/details/${id}`} className="flex flex-col gap-3">
        <h2 className='text-2xl self-center text-slate-200 break-words' >
          {title}
        </h2>
      </Link>
        <div className='flex flex-row items-center relative'>

          <button type="button" className='absolute left-[-5px] w-[30px] h-[100%] text-center bg-gradient-to-r from-slate-800 to-transparent' onClick={() => ulRef.current!.scrollLeft -= 100}>
            <BsChevronLeft className='mt-1 text-slate-100 '/>
          </button>

          <ul className='flex flex-row gap-1 overflow-x-auto relative whitespace-nowrap mx-3' id='scrollbar' ref={ulRef}>
            {
              tags.map(({label, id}) => (
                <div key={id}>
                  <li className='bg-slate-300 text-slate-900 rounded-md px-1 hover:bg-slate-200 cursor-pointer'>{label}</li>
                </div>
              ))
            }
          </ul>

          <button type="button" className='absolute right-0 w-[30px] h-[100%] bg-gradient-to-l from-slate-800 to-transparent' onClick={() => ulRef.current!.scrollLeft += 100}>
            <BsChevronRight className='mt-1 absolute right-[-5px] top-[.5px] text-slate-100'/>
          </button>

        </div>
      </div>
  )
}

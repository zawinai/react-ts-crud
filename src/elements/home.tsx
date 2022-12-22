import { Card } from '../components/card';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { useContext, useMemo, useState } from 'react'
import { AppContext } from '../lib/context';
import { Link } from 'react-router-dom';


const Home = () => {

  const { state } = useContext(AppContext)

  const { notes, tagList, selectTags } = state

  const [ title, setTitle ] = useState<string>('')

  const searchFilterDisplay = useMemo(() => {
    return notes.filter(note => {
      return(
        (title === "" ||
        note.title.toLowerCase().includes(title.toLowerCase()))
        &&
        (selectTags.length === 0 ||
        selectTags.every((st) => 
          note.tags.some(nt => nt.id === st.id)
        ))
      )
    })
  }, [notes, selectTags, title])


  return (
     <main>
          <div className='md:max-w-[1800px] min-w-[450px] bg-slate-600 mx-auto p-10 min-h-screen'>
               <Header/>
               <div className='grid grid-cols-1 md:grid-cols-4 gap-x-10 p-10 min-h-screen'>
                 <section className='col-span-3 bg-slate-400'>
                   <div className='grid grid-cols-card-container p-3 gap-3 place-items-center md:place-items-start '>
                    {
                      notes.length > 1 
                      ?
                      searchFilterDisplay.map(({title, markdown, tags, id}) => (
                        <div key={id}>
                          <Card title={title} markdown = {markdown} tags={tags} id ={id}/>  
                        </div>
                      ))
                      :
                      <div className='grid min-h-screen place-content-center'>
                        <h1 className='text-3xl text-slate-200 font-bold]'>Welcome to note app!</h1>
                        <Link to="/add" className='text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-rose-700 cursor-pointer'>Start Writing a note</Link>
                      </div>
                    }
                   </div>    
                 </section>
                 <Sidebar title ={title} setTitle ={setTitle}/>
               </div>
          </div>
     </main>
  )
}

export default Home
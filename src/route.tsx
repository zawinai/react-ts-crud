import { Routes, Route, Navigate } from 'react-router-dom'

// Elements
import NewNote from './elements/newNote'
import Home from './elements/home'
import ShowNote from './elements/noteDetail'
import NoteContext from './elements/noteContext'
import EditNote from './elements/editNote'

const Routers = () => {
  return (
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<NewNote/>}/>
          <Route path='/details/:id' element={<NoteContext/>}>
              <Route index element={<ShowNote/>}/>
              <Route path='edit' element={<EditNote/>}/>
          </Route>
          <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default Routers
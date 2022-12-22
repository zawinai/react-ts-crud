import React, { useContext } from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'
import { AppContext } from '../lib/context'


const NoteContext = () => {

    const { state } = useContext(AppContext)

    const { id } = useParams()

    const note = state.notes.find((n) => n.id === id)

    if (note == null) return <Navigate to="/"/>

  return <Outlet context={note} />
  
}

export default NoteContext
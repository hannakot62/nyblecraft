import React from 'react'
import Note, { INote } from '../Note/Note'
import style from './NotesList.module.scss'

interface INotesList {
    notes: INote[]
    setModalActive?: any
}

const NotesList: React.FC<INotesList> = (props: INotesList) => {
    const notes = props.notes
    const notesToRender = notes.map(note => (
        <Note
            key={note.created.valueOf() + note.contents}
            created={new Date(note.created)}
            contents={note.contents}
            tags={note.tags}
        />
    ))
    return <div className={style.container}>{notesToRender}</div>
}

export default NotesList

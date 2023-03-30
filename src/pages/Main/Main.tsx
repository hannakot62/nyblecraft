import React, { useState } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import style from './Main.module.scss'
import Add from '../../UI/Icons/Add'
import BigButton from '../../UI/Buttons/BigButton/BigButton'
import { useSelector } from 'react-redux'

const Main: React.FC = () => {
    const notesToShow = useSelector((state: any) => state.allNotes.allNotes)

    return (
        <div className={style.container}>
            <h1>Your notes</h1>
            search
            <NotesList notes={notesToShow} />
            <BigButton icon={<Add />} linkPath={'/add'} onClick={() => {}} />
        </div>
    )
}

export default Main

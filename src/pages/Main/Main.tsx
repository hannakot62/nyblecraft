import React, { useEffect, useState } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import style from './Main.module.scss'
import Add from '../../UI/Icons/Add'
import BigButton from '../../UI/Buttons/BigButton/BigButton'
import { useDispatch, useSelector } from 'react-redux'
import { INote } from '../../components/Note/Note'
import { ITag } from '../../components/Tag/Tag'

const Main: React.FC = () => {
    const allNotes = useSelector((state: any) => state.allNotes.allNotes)
    const [notesToShow, setNotesToShow] = useState(allNotes)
    const activeTagTitle = useSelector(
        (state: any) => state.activeTag.activeTag.title
    )

    useEffect(() => {
        if (activeTagTitle.length) {
            setNotesToShow(
                allNotes.filter((note: INote) => {
                    const tags = note.tags
                    const titles = tags.map((tag: ITag) => tag.title)
                    if (titles.includes(activeTagTitle)) return note
                })
            )
        } else setNotesToShow(allNotes)
    }, [activeTagTitle, allNotes])

    return (
        <div className={style.container}>
            <h1>Your notes</h1>
            <h3>
                Active tag:{' '}
                {activeTagTitle.length ? '#' + activeTagTitle : 'none'}
            </h3>
            <NotesList notes={notesToShow} />
            <BigButton icon={<Add />} linkPath={'/add'} />
        </div>
    )
}

export default Main

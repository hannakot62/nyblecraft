import React from 'react'
import style from './Tag.module.scss'
import MicroButton from '../../UI/Buttons/MicroButton/MicroButton'
import { useDispatch, useSelector } from 'react-redux'
import {
    removeActiveNote,
    setActiveNote
} from '../../store/slices/activeNoteSlice'
import { editNote } from '../../store/slices/allNotesSlice'

export interface ITag {
    title: string
    active: boolean
    noteContents?: string
    noteCreated?: Date
    neighbours?: Array<ITag>
    inNote?: boolean
}

const Tag: React.FC<ITag> = (props: ITag) => {
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(
            setActiveNote({
                created: props.noteCreated?.valueOf(),
                contents: props.noteContents,
                tags: props.neighbours
            })
        )
        const tagsAfter = JSON.parse(JSON.stringify(props.neighbours))
        tagsAfter?.splice(
            tagsAfter?.indexOf({ title: props.title, active: false }),
            1
        )
        dispatch(
            editNote({
                created: props.noteCreated?.valueOf(),
                contentsBefore: props.noteContents,
                tagsBefore: props.neighbours,
                contentsAfter: props.noteContents,
                tagsAfter: tagsAfter
            })
        )
        // dispatch(removeActiveNote())
    }

    return (
        <div className={style.container}>
            <h5
                className={style[props.active.toString()]}
                onClick={() => {
                    console.log(props.title)
                }}
            >
                #{props.title}
            </h5>
            {props.inNote ? (
                <MicroButton text={'×'} onClick={() => handleDelete()} />
            ) : (
                <></>
            )}
        </div>
    )
}

export default Tag

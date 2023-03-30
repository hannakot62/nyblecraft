import React, { useEffect, useState } from 'react'
import style from './Tag.module.scss'
import MicroButton from '../../UI/Buttons/MicroButton/MicroButton'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/slices/activeNoteSlice'
import { editNote } from '../../store/slices/allNotesSlice'
import {
    removeActiveTag,
    setActiveTag
} from '../../store/slices/activeTagSlice'

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
    const activeTag = useSelector(
        (state: any) => state.activeTag.activeTag.title
    )
    const [active, setActive] = useState(props.active)
    useEffect(() => {
        if (activeTag === props.title) setActive(true)
    }, [activeTag])

    function handleDelete() {
        dispatch(
            setActiveNote({
                created: props.noteCreated?.valueOf(),
                contents: props.noteContents,
                tags: props.neighbours
            })
        )
        const tagsAfter = JSON.parse(
            JSON.stringify(
                props.neighbours?.map(tag => {
                    return { title: tag.title, active: tag.active }
                })
            )
        )

        tagsAfter?.splice(
            tagsAfter?.findIndex((tag: ITag) => tag.title === props.title),
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
    }

    function handleActive() {
        if (!active) {
            dispatch(removeActiveTag())
            dispatch(setActiveTag({ title: props.title }))
        } else dispatch(removeActiveTag())
    }
    return (
        <div className={style.container}>
            <h5
                className={style[active.toString()]}
                onClick={() => handleActive()}
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

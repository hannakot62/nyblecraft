import React, { useState } from 'react'
import { ITag } from '../Tag/Tag'
import style from './Note.module.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton'
import Delete from '../../UI/Icons/Delete'
import Edit from '../../UI/Icons/Edit'
import TagsList from '../TagsList/TagsList'
import Add from '../../UI/Icons/Add'
import Modal from '../../Modal/Modal'

export interface INote {
    created: Date
    contents: string
    tags: Array<ITag>
}

const Note: React.FC<INote> = (props: INote) => {
    const [modalActive, setModalActive] = useState(false)
    function handleAddTag() {
        setModalActive(true)
    }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h4>Added {formatDistanceToNow(props.created)} ago</h4>
                <div className={style.buttons}>
                    <SmallButton icon={<Delete />} />
                    <SmallButton icon={<Edit />} />
                </div>
            </div>
            <h2>{props.contents}</h2>
            {props.tags.length ? (
                <div className={style.tags}>
                    <TagsList tags={props.tags} />
                    <SmallButton icon={<Add />} onClick={handleAddTag} />
                </div>
            ) : (
                <></>
            )}
            <Modal
                active={modalActive}
                setActive={setModalActive}
                tags={props.tags}
            />
        </div>
    )
}

export default Note

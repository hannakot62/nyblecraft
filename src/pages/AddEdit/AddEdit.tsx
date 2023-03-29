import React, { useState } from 'react'
import style from './AddEdit.module.scss'
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton'
import MicroButton from '../../UI/Buttons/MicroButton/MicroButton'
import TagsList from '../../components/TagsList/TagsList'

interface IAddEdit {
    type: 'edit' | 'add'
}

const AddEdit: React.FC<IAddEdit> = (props: IAddEdit) => {
    //TODO добавить начальные значения при редактировании
    const [contents, setContents] = useState('')
    const [tags, setTags] = useState([{ title: 'ppp', active: false }])
    return (
        <div className={style.container}>
            <h2>{props.type} note</h2>
            <label>
                Note contents:
                <textarea />
            </label>
            <label>
                Add tags:
                <span className={style.addTags}>
                    <input />
                    <MicroButton text={'+'} />
                </span>
            </label>
            <div className={style.tags}>
                <TagsList tags={tags} />
            </div>
            <div className={style.buttons}>
                <SmallButton text={'cancel'} />
                <SmallButton text={props.type} />
            </div>
        </div>
    )
}

export default AddEdit

import React from 'react'
import style from './Tag.module.scss'
import MicroButton from '../../UI/Buttons/MicroButton/MicroButton'

export interface ITag {
    title: string
    active: boolean
}

const Tag: React.FC<ITag> = (props: ITag) => {
    //TODO сделать удаление
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
            <MicroButton text={'×'} onClick={() => {}} />
        </div>
    )
}

export default Tag

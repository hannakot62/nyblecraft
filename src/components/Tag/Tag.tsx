import React from 'react'
import style from './Tag.module.scss'

export interface ITag {
    title: string
    active: boolean
}

const Tag: React.FC<ITag> = (props: ITag) => {
    return (
        <h5
            className={style[props.active.toString()]}
            onClick={() => {
                console.log(props.title)
            }}
        >
            #{props.title}
        </h5>
    )
}

export default Tag

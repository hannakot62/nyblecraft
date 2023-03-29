import React from 'react'
import style from './SmallButton.module.scss'

export interface IButton {
    text?: string
    icon?: any
    //TODO убрать ?
    onClick?: any
}

const SmallButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button className={style.button} onClick={() => props.onClick()}>
            {props.text} {props.icon}
        </button>
    )
}

export default SmallButton

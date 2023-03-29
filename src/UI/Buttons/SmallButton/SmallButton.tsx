import React from 'react'
import style from './SmallButton.module.scss'

interface IButton {
    text?: string
    icon?: any
    //TODO убрать ?
    onClick?: () => void
}

const SmallButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button className={style.button} onClick={() => props.onClick}>
            {props.text} {props.icon}
        </button>
    )
}

export default SmallButton

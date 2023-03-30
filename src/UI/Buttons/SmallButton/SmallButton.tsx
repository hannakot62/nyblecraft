import React from 'react'
import style from './SmallButton.module.scss'
import { Link } from 'react-router-dom'

export interface IButton {
    text?: string
    icon?: any
    //TODO убрать ?
    onClick: () => void
    linkPath?: string
}

const SmallButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button className={style.button} onClick={() => props.onClick()}>
            {props.linkPath ? (
                <Link to={props.linkPath}>
                    {props.text} {props.icon}
                </Link>
            ) : props?.text ? (
                props.text
            ) : (
                props.icon
            )}
        </button>
    )
}

export default SmallButton

import React, { Dispatch, SetStateAction, useState } from 'react'
import style from './Modal.module.scss'
import MicroButton from '../UI/Buttons/MicroButton/MicroButton'
import TagsList from '../components/TagsList/TagsList'
import SmallButton from '../UI/Buttons/SmallButton/SmallButton'
import { ITag } from '../components/Tag/Tag'

interface IModal {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    tags: ITag[]
}

const Modal: React.FC<IModal> = (props: IModal) => {
    const [tags, setTags] = useState(props.tags)
    return (
        <div
            className={
                props.active
                    ? style.modal.concat(' ') + style.active
                    : style.modal
            }
            onClick={() => props.setActive(false)}
        >
            <div
                className={style.modalContent}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                    e.stopPropagation()
                }
            >
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
                    <SmallButton text={'save'} />
                </div>
            </div>
        </div>
    )
}

export default Modal

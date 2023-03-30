import React, { Dispatch, SetStateAction, useState } from 'react'
import style from './Modal.module.scss'
import MicroButton from '../UI/Buttons/MicroButton/MicroButton'
import TagsList from '../components/TagsList/TagsList'
import SmallButton from '../UI/Buttons/SmallButton/SmallButton'
import { ITag } from '../components/Tag/Tag'
import { useDispatch, useSelector } from 'react-redux'
import { checkForTags } from '../pages/AddEdit/checkForTags'
import { editNote } from '../store/slices/allNotesSlice'

interface IModal {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    tags: ITag[]
}

const Modal: React.FC<IModal> = (props: IModal) => {
    const activeContents = useSelector(
        (state: any) => state.activeNote.activeNote.contents
    )
    const activeTags = new Array<ITag>().concat(
        useSelector((state: any) => state.activeNote.activeNote.tags)
    )
    const activeCreated = useSelector(
        (state: any) => state.activeNote.activeNote.created
    )
    const [tags, setTags] = useState(props.tags)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    function addPureTag() {
        setInput('')
        const tagArr = checkForTags('#' + input)
        setTags(tags.concat(tagArr))
    }
    function handleSave() {
        dispatch(
            editNote({
                created: activeCreated,
                contentsBefore: activeContents,
                tagsBefore: activeTags,
                contentsAfter: activeContents,
                tagsAfter: tags
            })
        )
    }
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
                        <input
                            value={input}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setInput(e.target.value)}
                        />
                        <MicroButton text={'+'} onClick={() => addPureTag()} />
                    </span>
                </label>
                <div className={style.tags}>
                    <TagsList tags={tags} />
                </div>
                <div className={style.buttons}>
                    <SmallButton
                        text={'cancel'}
                        onClick={() => props.setActive(false)}
                    />
                    <SmallButton
                        text={'save'}
                        onClick={() => {
                            props.setActive(false)
                            handleSave()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal

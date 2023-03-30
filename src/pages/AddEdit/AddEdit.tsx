import React, { useDeferredValue, useMemo, useState } from 'react'
import style from './AddEdit.module.scss'
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton'
import MicroButton from '../../UI/Buttons/MicroButton/MicroButton'
import TagsList from '../../components/TagsList/TagsList'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, editNote } from '../../store/slices/allNotesSlice'
import { checkForTags } from './checkForTags'
import { ITag } from '../../components/Tag/Tag'
import { removeActiveNote } from '../../store/slices/activeNoteSlice'

interface IAddEdit {
    type: 'edit' | 'add'
}

const AddEdit: React.FC<IAddEdit> = (props: IAddEdit) => {
    const activeContents = useSelector(
        (state: any) => state.activeNote.activeNote.contents
    )
    const activeTags = new Array<ITag>().concat(
        useSelector((state: any) => state.activeNote.activeNote.tags)
    )
    const activeCreated = useSelector(
        (state: any) => state.activeNote.activeNote.created
    )
    // console.log(activeCreated, activeContents, activeTags)
    const [contents, setContents] = useState(activeContents)
    const deferredContents = useDeferredValue(contents)
    const [pureTags, setPureTags] = useState(activeTags)
    const [singleTag, setSingleTag] = useState('')
    const dispatch = useDispatch()

    const tags = useMemo(() => {
        const titleSet = Array.from(
            new Set(
                pureTags
                    .concat(checkForTags(deferredContents))
                    .map((tag: ITag) => tag.title)
            )
        )
        const set = titleSet.map(title => {
            return { title: title, active: false }
        })
        return Array.from(set)
    }, [deferredContents, pureTags])

    function handleSave() {
        props.type === 'add'
            ? dispatch(
                  addNote({
                      created: new Date().valueOf(),
                      contents: contents,
                      tags: tags
                  })
              )
            : dispatch(
                  editNote({
                      created: activeCreated,
                      contentsBefore: activeContents,
                      tagsBefore: activeTags,
                      contentsAfter: contents,
                      tagsAfter: tags
                  })
              )
        dispatch(removeActiveNote())
    }

    function handleCancel() {
        dispatch(removeActiveNote())
    }

    function addPureTag() {
        setSingleTag('')
        const tagArr = checkForTags('#' + singleTag)
        setPureTags(pureTags.concat(tagArr))
    }

    return (
        <div className={style.container}>
            <h2>{props.type} note</h2>
            <label>
                Note contents:
                <textarea
                    value={contents}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setContents(e.target.value)
                    }}
                />
            </label>
            <label>
                Add tags:
                <span className={style.addTags}>
                    <input
                        value={singleTag}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSingleTag(e.target.value)
                        }
                    />
                    <MicroButton text={'+'} onClick={() => addPureTag()} />
                </span>
            </label>
            <div className={style.tags}>
                <TagsList
                    tags={tags}
                    noteCreated={activeCreated}
                    noteContents={activeContents}
                    inNote={false}
                />
            </div>
            <div className={style.buttons}>
                <SmallButton
                    text={'cancel'}
                    linkPath={'/main'}
                    onClick={handleCancel}
                />
                <SmallButton
                    text={props.type}
                    linkPath={'/main'}
                    onClick={handleSave}
                />
            </div>
        </div>
    )
}

export default AddEdit

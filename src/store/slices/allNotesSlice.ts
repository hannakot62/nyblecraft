import { createSlice } from '@reduxjs/toolkit'
import { removeNotesFromLS } from '../helpers/removeNotesFromLS'
import { getNotesFromLS } from '../helpers/getNotesFromLS'
import { setNotesToLS } from '../helpers/setNotesToLS'
import { INote } from '../../components/Note/Note'

const initialState = {
    allNotes: getNotesFromLS()
}
const allNotesSlice = createSlice({
    name: 'allNotes',
    initialState,
    reducers: {
        setNotes(state, action) {
            setNotesToLS(action.payload.allNotes)
            state.allNotes = action.payload.allNotes
        },
        removeNotes(state) {
            removeNotesFromLS()
            state.allNotes = []
        },
        addNote(state, action) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.allNotes.push({
                created: action.payload.created,
                contents: action.payload.contents,
                tags: action.payload.tags
            })
            state.allNotes.sort(
                (a: INote, b: INote) =>
                    a.created.valueOf() - b.created.valueOf()
            )
            setNotesToLS(state.allNotes)
        },
        deleteNote(state, action) {
            const index = state.allNotes.findIndex(
                (note: INote) =>
                    note.created === action.payload.created &&
                    note.contents === action.payload.contents &&
                    JSON.stringify(note.tags) ===
                        JSON.stringify(action.payload.tags)
            )
            state.allNotes.splice(index, 1)
            setNotesToLS(state.allNotes)
        },
        editNote(state, action) {
            const index = state.allNotes.findIndex(
                (note: INote) =>
                    note.created === action.payload.created &&
                    note.contents === action.payload.contentsBefore &&
                    JSON.stringify(note.tags) ===
                        JSON.stringify(action.payload.tagsBefore)
            )
            state.allNotes[index].contents = action.payload.contentsAfter
            state.allNotes[index].tags = action.payload.tagsAfter
            setNotesToLS(state.allNotes)
        }
    }
})

export const { setNotes, removeNotes, addNote, deleteNote, editNote } =
    allNotesSlice.actions
export default allNotesSlice.reducer

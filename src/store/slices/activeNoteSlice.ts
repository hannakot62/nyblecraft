import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeNote: { created: 0, contents: '', tags: [] }
}
const activeNoteSlice = createSlice({
    name: 'activeNote',
    initialState,
    reducers: {
        setActiveNote(state, action) {
            state.activeNote.contents = action.payload.contents
            state.activeNote.created = action.payload.created
            state.activeNote.tags = action.payload.tags
        },
        removeActiveNote(state) {
            state.activeNote = { created: 0, contents: '', tags: [] }
        }
    }
})

export const { setActiveNote, removeActiveNote } = activeNoteSlice.actions
export default activeNoteSlice.reducer

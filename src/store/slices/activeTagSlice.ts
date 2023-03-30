import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeTag: { title: '', active: false }
}
const activeTagSlice = createSlice({
    name: 'activeTag',
    initialState,
    reducers: {
        setActiveTag(state, action) {
            state.activeTag.title = action.payload.title
            state.activeTag.active = true
        },
        removeActiveTag(state) {
            state.activeTag = { title: '', active: false }
        }
    }
})

export const { setActiveTag, removeActiveTag } = activeTagSlice.actions
export default activeTagSlice.reducer

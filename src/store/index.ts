import { configureStore } from '@reduxjs/toolkit'
import allNotesReducer from './slices/allNotesSlice'
import activeNoteReducer from './slices/activeNoteSlice'
import activeTagReducer from './slices/activeTagSlice'

export const store = configureStore({
    reducer: {
        allNotes: allNotesReducer,
        activeNote: activeNoteReducer,
        activeTag: activeTagReducer
    }
})

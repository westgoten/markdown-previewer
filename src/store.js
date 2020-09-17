import { configureStore } from '@reduxjs/toolkit'
import { editingReducer } from './reducers/reducers'

const store = configureStore({ reducer: editingReducer })

export default store

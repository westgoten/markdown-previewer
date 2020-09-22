import { configureStore, combineReducers } from '@reduxjs/toolkit'
import editing from './reducers/editing'
import maximized from './reducers/maximized'

const rootReducer = combineReducers({ editing, maximized })
const store = configureStore({ reducer: rootReducer })

export default store

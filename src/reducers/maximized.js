import { NONE } from '../utils/consts/maximizedState'
import { MAXIMIZE_WINDOW } from '../actions/types'

function maximized(state = NONE, action) {
    switch(action.type) {
        case MAXIMIZE_WINDOW:
            return action.window
        default:
            return state
    }
}

export default maximized

import { createAction, handleActions } from 'redux-actions'
import dotProp from 'dot-prop-immutable'
import * as taskActions from '@actions/task'

const initialState = {
    tasks: [],
}

const reducer = handleActions({
    [taskActions.setUserTasks]: (state, action) => {
        return dotProp.set(state, 'tasks', action.payload)
    },
}, initialState)

export default reducer

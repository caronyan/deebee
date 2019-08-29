import { createAction } from 'redux-actions'
import immutable from 'dot-prop-immutable-chain'
import { TASK_LIST } from '@constants/task'

export const setUserTasks = createAction(TASK_LIST)

export const getUserTasks = userId => dispatch => {
    let sampleData = [{
        tag: 'normal',
        list: [{
            id: 1,
            name: 'test1',
        }, {
            id: 2,
            name: 'test2',
        }],
    }, {
        tag: 'abnormal',
        list: [{
            id: 3,
            name: 'test3',
        }, {
            id: 4,
            name: 'test4',
        }],
    }]
    console.log(sampleData)
    dispatch(setUserTasks(sampleData))
    // return sampleData
}


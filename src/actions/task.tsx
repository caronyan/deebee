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
        }, {
            id: 5,
            name: 'test5',
        }, {
            id: 6,
            name: 'test6',
        }, {
            id: 7,
            name: 'test7',
        }, {
            id: 8,
            name: 'test8',
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


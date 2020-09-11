import {StateType, TOGGLE_COLLAPSED, reducer} from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expected
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expected
    expect(newState.collapsed).toBe(false)
})

test('will be error', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    expect( () => {
        reducer(state, {type: 'FAKE_TYPE'} )
    }).toThrowError()
})
import authReducer from '../../reducers/auth';

test('should setup default auth state value', () => {
    const state = authReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should set uid for login', () => {
    const uid = '123';
    const state = authReducer({}, {
        type: 'LOGIN',
        uid
    })
    
    expect(state.uid).toEqual(uid)
})

test('should clear uid for logout', () => {
    const state = authReducer({uid: 'anything'}, {
        type: 'LOGOUT'
    })
    expect(state).toEqual({})
})

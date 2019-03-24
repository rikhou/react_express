const test2 = (state = {}, action) => {
  switch (action.type) {
    case 'TEST2':
      return {
        ...state,
        test2: 'test2',
      }
    default:
      return state
  }
}

export default test2
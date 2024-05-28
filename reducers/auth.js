import actionTypes from '@/configs/actionTypes'
const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      console.log('actions', action)
      return {
        ...state,
        email: action.email,
        logged: action.logged,
      }
    default:
      return state
  }
}

export default auth

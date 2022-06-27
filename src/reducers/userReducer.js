const user = {
  turn: true
}

export default (state = user, action) => {

  switch (action.type) {
    case 'user/changeShift': {
      return {
        ...user,
        turn: action.payload
      }
    }

    default:
      break;
  }

  return state;
}
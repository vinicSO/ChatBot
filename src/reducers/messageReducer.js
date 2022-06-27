const messages = []

export default (state = messages, action) => {

  switch (action.type) {
    case 'messages/addMessage': {
      return [
        ...state,
        action.payload
      ];
    }

    default:
      break;
  }

  return state;
}
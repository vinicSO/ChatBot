const messages = []

export default (state = messages, action) => {

  switch (action.type) {
    case 'messages/addMessage': {
      return [
        ...state,
        action.payload
      ];
    }
    case 'messages/setEnable': {
      return state.map((message) => {
        if (message.key !== action.payload.id) {
          return message;
        }

        return {
          ...message,
          message: {
            ...message.message,
            enable: action.payload.enable
          }
        }
      })
    }

    default:
      break;
  }

  return state;
}
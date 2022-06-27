import store from "../store";
import nextId from "react-id-generator";

function handleAction(action, bot) {

  switch (action.type) {
    case "options":

      const t = action.key.length;

      let content = [];

      bot.actions.filter(e => e.key.length == t+1 && e.key.slice(0, t) == action.key).map(a => {
        content.unshift({
          type: "button",
          text: a.nome,
          action: a
        });
      });

      const newMessage = {
        key: nextId(),
        message: {
          me: false,
          time: new Date(),
          content: content
        }
      };

      store.dispatch({ type: 'messages/addMessage', payload: newMessage});

      break;
    case "request":
      
      break;
    case "process":

      break;
    default:
      break;
  }
}

export {handleAction};
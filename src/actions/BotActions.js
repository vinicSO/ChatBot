import { createMessage } from '../model/Message';

function handleAction(action, bot) {

  let content = [
  ];

  switch (action.type) {
    case "options":
      let t = action.key.length;

      bot.actions.filter(e => e.key.length == t+1 && e.key.slice(0, t) == action.key).map(a => {
        content.unshift({
          type: "button",
          text: a.nome,
          action: a
        });
      });

      createMessage(false, content);

      break;
    case "request":
      
      break;
    case "process":

      break;
    default:
      break;
  }

  /*let newMessage = {
    key: nextId(),
    message: <Message me={false} content={content}/>
  };

  store.dispatch({ type: 'messages/addMessage', payload: newMessage});*/
}

export {handleAction};
const bot = {
	wait: true,
	targetAction: "0",
	actions: [
		{
			key: "0",
			nome: "iniciar",
			type: "options",
			options: ["01", "02"]
		},
		{
			key: "01",
			nome: "OPTION 01",
			type: "options",
			options: ["011", "012", "013"]
		},
		{
			key: "02",
			nome: "OPTION 02",
			type: "request",
			request: ""
		},
		{
			key: "011",
			nome: "OPTION 01.1",
			type: "process",
			nextStep: "0111"
		},
		{
			key: "0111",
			nome: "OPTION 01.1.1",
			type: "request",
			request: ""
		},
		{
			key: "012",
			nome: "OPTION 01.2",
			type: "process",
			nextStep: "0121"
		},
		{
			key: "0121",
			nome: "OPTION 01.2.1",
			type: "request",
			request: ""
		},
		{
			key: "013",
			nome: "OPTION 01.3",
			type: "process",
			nextStep: "0131"
		},
		{
			key: "0131",
			nome: "OPTION 01.3.1",
			type: "request",
			request: ""
		}
	]
}

export default (state = bot, action) => {

	switch (action.type) {
    case 'bot/setTargetAction':
      return {
        ...bot,
        wait: action.payload.wait,
        targetAction: action.payload.targetAction
      }
	
		default:
      break;
	}

	return state;
}
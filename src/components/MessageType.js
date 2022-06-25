import { VStack, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import nextId from "react-id-generator";

function handleMessageType(messages = [], props) {
	const render = messages.map(element => {
		switch (element.type) {
			case "text":
				return <TextMessage text={element.text} key={nextId()} me={props.me}/>;
			case "button":
				return <ButtonMessage text={element.text} key={nextId()} />
			default:
				break;
		}
	});

	return render;
}

function TextMessage(props) {
	return(
		<VStack>
			<Text
				color="white"
				style={{textAlign: (props.me) ? "right":"left"}}
			>
				{props.text}
			</Text>
		</VStack>
	)
}

function ButtonMessage(props) {
	return(
		<VStack>
			<TouchableOpacity
				style={styles.buttonMessage}
			>
				<Text style={styles.textButtonMessage}>{props.text}</Text>
			</TouchableOpacity>
		</VStack>
	)
}

const styles = StyleSheet.create({
	buttonMessage: {
		backgroundColor: "#fff",
		width: 250,
		height: 30,
		borderRadius: 20,
		margin: 5,
		borderColor: "#79a8f2",
		borderWidth: 1
	},
	textButtonMessage: {
		flex: 1,
		color: "#4974b8",
		textAlign: "center",
		textAlignVertical: "center"
	}
});

export {TextMessage, ButtonMessage, handleMessageType};
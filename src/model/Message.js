import { StyleSheet } from "react-native";
import { Box, HStack, Spacer, VStack, Text, View } from "native-base";
import nextId from "react-id-generator";
import Moment from "moment";
import { TouchableOpacity } from "react-native";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { handleAction } from "../actions/BotActions";
import { useState } from "react";

const selectBot = (state) => state.bot;

function Message(props) {

  const dispatch = useDispatch();

  const bot = useSelector(selectBot, shallowEqual);
  
  const key = props.id;
  const timeStamp = Moment(props.time).format('HH:mm');
  const content = props.content;
  const me = props.me;
  const enable = props.enable;
  const config = props.me
    ? { alignSelf: "flex-end", backgroundColor: "#4974b8" }
    : { alignSelf: "flex-start", backgroundColor: "#8449d6" };

  return (
    <Box
      _dark={{ borderColor: "muted.50" }}
      borderColor="muted.800"
      pl={["0", "4"]}
      pr={["0", "5"]}
      py="2"
      style={styles.item}
      pointerEvents={enable}
    >
      <HStack space={[2, 3]} justifyContent="space-between">
        {me && <Spacer />}
        <VStack style={[styles.message, config]}>
          <Text
            fontSize="xs"
            _dark={{ color: "warmGray.50" }}
            color="white"
            alignSelf="flex-end"
          >
            {timeStamp}
          </Text>
          {
            content.map((message) => {

              const [opacity, setOpacity] = useState();

              const handleClick = (action) => {
                setOpacity(.5);
                

                dispatch({ type: 'messages/setEnable', payload: {id: key, enable: "none"}});
            
                handleAction(action, bot);
              }
              
              return(
                <VStack key={nextId()}>
                  {
                    message.type == "text" &&
                    <Text
                      color="white"
                      style={{textAlign: (me) ? "right":"left"}}
                    >
                      {message.text}
                    </Text>
                  }
                  {
                    message.type == "button" &&
                    <TouchableOpacity
                      style={{...styles.buttonMessage, opacity: opacity}}
                      onPress={() => handleClick(message.action)}
                    >
                      <Text style={styles.textButtonMessage}>{message.text}</Text>
                    </TouchableOpacity>
                  }
                </VStack>
              );
            })
          }
        </VStack>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    marginRight: 10,
  },
  message: {
		borderRadius: 10,
		padding: 10,
	},
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

export default Message;

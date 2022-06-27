import { StyleSheet } from "react-native";
import { Box, HStack, Spacer, View, VStack, Text} from "native-base";
import Moment from "moment";
import { handleMessageType } from "../components/MessageType";

function Message(props) {
  
  const timeStamp = Moment(props.time).format('HH:mm');
  const content = props.content;
  const me = props.me;
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
          {handleMessageType(content, props)}
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
	}
});

export default Message;
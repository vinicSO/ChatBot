import { Component } from "react";
import { StyleSheet } from "react-native";
import { Box, HStack, Spacer, Text, VStack } from "native-base";
import nextId from "react-id-generator";
import Moment from "moment";

class Message extends Component {
  constructor(recentText, me, props) {
    super(props);

    Moment.locale('br');
    time = new Date();

    this.id = nextId();
    this.timeStamp = Moment(time).format('HH:mm');
    this.text = recentText;
    this.me = me;
    this.config = me
      ? { alignSelf: "flex-end", backgroundColor: "#4974b8" }
      : { alignSelf: "flex-start", backgroundColor: "#8449d6" };
  }

  render() {
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
          {this.me && <Spacer />}
          <VStack style={[styles.message, this.config]}>
            <Text
              fontSize="xs"
              _dark={{ color: "warmGray.50" }}
              color="white"
              alignSelf="flex-end"
            >
              {this.timeStamp}
            </Text>
            <Text color="white">{this.text}</Text>
          </VStack>
        </HStack>
      </Box>
    );
  }
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
});

export default Message;

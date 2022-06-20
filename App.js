import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  View,
  Box,
  HStack,
  IconButton,
  MaterialIcons,
  HamburgerIcon,
  Text,
  SearchIcon,
  FlatList,
} from "native-base";
import {
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Component } from "react";
import nextId from "react-id-generator";
import Moment from 'moment';

import Message from "./src/model/Message";

const windowWidth = Dimensions.get("window").width;

var teste = new Message(
  "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  "Sujitha Mathur",
  "11:11 PM",
  "Cheer up, there!",
  false
);

const mess = [
  new Message(
    "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    "Aafreen Khan",
    "12:47 PM",
    "Good Day!",
    true
  ),
];

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: mess,
      text: "",
    };
  }

  handleChangeText = (text) => {
    this.setState({
      text: text,
    });
  };

  handleSendClick = () => {
    let m = this.state.messages;

    Moment.locale('br');
    let time = new Date();

    let newMessage = new Message(
      nextId(),
      "Eu",
      Moment(time).format('HH:mm'),
      this.state.text,
      true
    );

    m.unshift(newMessage);

    this.setState({
      messages: m,
      text: ""
    });
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <StatusBar
            style="light"
            translucent={false}
            backgroundColor="#6200ee"
          />

          <View style={styles.bar}>
            <Box safeAreaTop bg="#6200ee" />
            <HStack
              bg="#6200ee"
              px="1"
              py="2"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
            >
              <HStack alignItems="center">
                <IconButton
                  icon={
                    <HamburgerIcon
                      as={MaterialIcons}
                      name="menu"
                      size="sm"
                      color="white"
                    />
                  }
                />
                <Text color="white" fontSize="20" fontWeight="bold">
                  My Chat
                </Text>
              </HStack>
              <HStack>
                <IconButton
                  icon={
                    <SearchIcon
                      as={MaterialIcons}
                      name="search"
                      size="sm"
                      color="white"
                    />
                  }
                />
              </HStack>
            </HStack>
          </View>

          <View style={styles.fieldMessage}>
            <View style={styles.listMessages}>
              <FlatList
                inverted={true}
                data={this.state.messages}
                renderItem={({ item }) => item.render()}
                keyExtractor={(item) => item.id}
              />
            </View>

            <View style={styles.inputMessage}>
              <TextInput
                multiline={true}
                style={styles.textInput}
                value={this.state.text}
                onChangeText={this.handleChangeText}
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={this.handleSendClick}
              >
                <Feather name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  inputMessage: {
    width: windowWidth - 20,
    minHeight: 40,
    backgroundColor: "#FFF",
    borderRadius: 25,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    elevation: 5,
    alignSelf: "center",
    marginBottom: 10,
    maxHeight: 100,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
  },
  sendButton: {
    height: 30,
    width: 30,
    alignSelf: "center",
    borderRadius: 20,
  },
  fieldMessage: {
    flex: 1,
    flexDirection: "column",
    width: windowWidth,
  },
  bar: {
    alignSelf: "flex-start",
  },
  listMessages: {
    flex: 1,
    marginBottom: 5,
  },
});

export default Chat;

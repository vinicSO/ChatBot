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
} from "native-base";
import {
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { createMessage } from "../model/Message";
import MessageHistory from "../components/MessageHistory";

const windowWidth = Dimensions.get("window").width;

const selectUser = (state) => state.user;

function ChatView() {

  const [textMessage, setTextMessage] = useState("");

  const {turn:userTurn} = useSelector(selectUser, shallowEqual);

  const dispatch = useDispatch();

  handleSendClick = () => {
    let content = [
      {type: "text", text: textMessage},
    ];

    createMessage(true, content);

    setTextMessage("");

    dispatch({ type: 'user/changeShift'});
  };

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

          <MessageHistory />

          <View style={styles.inputMessage}>
            <TextInput
              multiline={true}
              style={styles.textInput}
              value={textMessage}
              onChangeText={(text) => {setTextMessage(text)}}
              editable={userTurn}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendClick}
              disabled={textMessage == ""}
            >
              <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
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
});

export default ChatView;

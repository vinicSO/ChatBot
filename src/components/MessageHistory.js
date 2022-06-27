import * as React from 'react';
import { View, FlatList } from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import Message from '../model/Message';

const selectAllMessages = (state) => state.messages;

function MessageHistory() {

  let messages = useSelector(selectAllMessages, shallowEqual);

  messages.sort(function (a, b) {
    return b.message.time - a.message.time;
  });

  return (
    <View style={styles.listMessages}>
      <FlatList
        inverted={true}
        data={messages}
        renderItem={({ item }) => <Message me={item.message.me} time={item.message.time} content={item.message.content} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listMessages: {
    flex: 1,
    marginBottom: 5,
  },
});

export default MessageHistory;
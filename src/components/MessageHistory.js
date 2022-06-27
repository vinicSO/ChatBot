import * as React from 'react';
import { View, FlatList } from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

const selectAllMessages = (state) => state.messages;

function MessageHistory() {

  let messages = useSelector(selectAllMessages, shallowEqual);

  messages.sort(function (a, b) {
    return b.message.props.time - a.message.props.time;
  })
  console.log(messages);
  return (
    <View style={styles.listMessages}>
      <FlatList
        inverted={true}
        data={messages}
        renderItem={({ item }) => item.message}
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
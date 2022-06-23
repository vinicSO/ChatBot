import * as React from 'react';
import { View, FlatList } from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

const selectAllMessages = (state) => state.messages;

function MessageHistory() {

  const messages = useSelector(selectAllMessages, shallowEqual);

  return (
    <View style={styles.listMessages}>
      <FlatList
        inverted={true}
        data={messages}
        renderItem={({ item }) => item.render()}
        keyExtractor={(item) => item.id}
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
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, View, Box, HStack, IconButton, MaterialIcons, HamburgerIcon, Text, SearchIcon, FlatList, Avatar, VStack, Spacer} from 'native-base';
import { StyleSheet, TextInput, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function MyBar() {
  return (
    <View  style={styles.bar}>
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="2" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<HamburgerIcon as={MaterialIcons} name="menu" size="sm" color="white"/>} />
          <Text color="white" fontSize="20" fontWeight="bold">
            My Chat
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<SearchIcon as={MaterialIcons} name="search" size="sm" color="white" />}/>
        </HStack>
      </HStack>
    </View>
  )
}

const messages = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    me: true
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    me: false
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    me: false
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    me: true
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    me: false
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    me: false
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d77",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    me: false
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d78",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    me: true
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d79",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    me: false
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d03",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    me: false
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d02",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    me: true
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d01",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    me: false
  }
];

function ItemMessageList(props) {
  return(
    <Box _dark={{borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2" style={styles.item}>
      <HStack space={[2, 3]} justifyContent="space-between">
        {!props.item.me
          ? <VStack style={styles.friendMessages}>
            <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="white" alignSelf="flex-start">
              {props.item.timeStamp}
            </Text>
            <Text color="white" _dark={{color: "warmGray.200"}}>
              {props.item.recentText}
            </Text>
          </VStack>
          : <>
            <Spacer />
            <VStack style={styles.myMessages}>
              <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="white" alignSelf="flex-end">
                {props.item.timeStamp}
              </Text>
              <Text color="white">
                {props.item.recentText}
              </Text>
            </VStack>
          </>
        }
      </HStack>
    </Box>
  );
}

function MessageView() {
  return (
    <View style={styles.fieldMessage}>
      <Box style={styles.listMessages}>
        <FlatList 
          data={messages}
          renderItem={({item}) => <ItemMessageList item={item} />}
          keyExtractor={item => item.id}
        />
      </Box>
      <TextInput multiline={true} style={styles.inputMessage}/>
    </View>
  )
}

function ChatView() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#6200ee"/>
      <MyBar />
      <MessageView />
    </View>
  );
}//

export default function App() {
  return (
    <NativeBaseProvider>
      <ChatView />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  inputMessage: {
    width: windowWidth-20,
    minHeight: 40,
    backgroundColor: "#FFF",
    borderRadius: 25,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    elevation: 5,
    alignSelf: 'center',
    marginBottom: 10,
    maxHeight: 100,
    
  },
  fieldMessage: {
    flex: 1,
    flexDirection: 'column',
    width: windowWidth
  },
  bar: {
    alignSelf: 'flex-start'
  },
  listMessages: {
    flex: 1,
    marginBottom: 5
  },
  myMessages: {
    backgroundColor: '#8449d6',
    borderRadius: 10,
    padding: 10
  },
  friendMessages: {
    backgroundColor: '#4974b8',
    borderRadius: 10,
    padding: 10
  },
  item: {
    marginLeft: 10,
    marginRight: 10
  }
});

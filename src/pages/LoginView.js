import { Box, Button, Center, FormControl, HStack, Input, Link, Text, View, VStack } from 'native-base';
import * as React from 'react';
import { signInAction } from '../actions/AuthActions';

function LoginView({navigation}) {
  
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginButton = async () => {
    const signIn = await signInAction(login, password);

    if (signIn) navigation.navigate("Chat");
  }

  return(
    <Box alignItems="center" flex="1" justifyContent="center">
      <Box 
        height="96"
        width="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        padding="10"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }}
        _web={{
          shadow: 2,
          borderWidth: 0
        }}
        _light={{
          backgroundColor: "gray.50"
        }}
      >
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={login} onChangeText={(text) => setLogin(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)}/>
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500"
              }}
              alignSelf="flex-end" mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLoginButton}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{color: "warmGray.200"}}>
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginView;
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
    
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Welcome',
          headerShown: false, 
        }} 
      />
      <Stack.Screen 
        name="register" 
        options={{
          title: 'New Farmer Register',
          headerShown: true,
        }} 
      />
      <Stack.Screen 
      name="confirmationPage"
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen 
      name="profile"
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name="pipefilling"
      options={{
        headerShown:true
      }}
      /><Stack.Screen 
      name="devicecontrol"
      options={{
        headerShown:false
      }}
      />
    </Stack>
  );
}
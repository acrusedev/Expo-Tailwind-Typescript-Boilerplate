// initial client file that will be rendered on the client side
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="index" 
      options={{ title: "Home" }}
      />
    </Stack>
  );
}

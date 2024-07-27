import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);


export default function HomeScreen() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText className='text-3xl'>Open up App.js to start working on your app!</StyledText>
    </StyledView>
  );
}
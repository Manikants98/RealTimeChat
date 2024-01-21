//@ts-nocheck
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Appbar, Avatar, IconButton } from 'react-native-paper';

const MessageScreen = () => {
  return (
    <ScrollView className="bg-white">
      <Appbar.Header elevated className="bg-gray-200 flex items-center">
        <Appbar.Content
          title={
            <CustomView className="flex flex-row items-center gap-2">
              <Avatar.Image
                size={50}
                source={{
                  uri: `https://source.unsplash.com/random/`,
                }}
              />
              <CustomView>
                <CustomText className="text-base">Mani Kant Sharma</CustomText>
                <CustomText>Online</CustomText>
              </CustomView>
            </CustomView>
          }
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <CustomView className="flex flex-col justify-end h-[93vh] p-2 bg-white gap-2">
        <CustomView className="flex flex-row py-1 items-center bg-gray-200">
          <IconButton icon="emoticon-excited-outline" />
          <TextInput
            placeholder="Message"
            className="bg-white px-2 rounded w-10/12"
          />
        </CustomView>
      </CustomView>
    </ScrollView>
  );
};

export default MessageScreen;

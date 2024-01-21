import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import {
  Appbar,
  Avatar,
  Card,
  IconButton,
  Paragraph,
  useTheme,
} from 'react-native-paper';

const MessageScreen = () => {
  const { params: item }: any = useRoute();
  const theme = useTheme();
  const isUser = true;
  const isAdmin = false;
  return (
    <CustomView className="bg-white">
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
                <CustomText className="text-base">{item.title}</CustomText>
                <CustomText>Online</CustomText>
              </CustomView>
            </CustomView>
          }
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex flex-col relative w-full bg-white">
        <CustomView className="flex flex-col h-[92vh] justify-end">
          <Card
            style={{
              backgroundColor: isUser
                ? theme.colors.primary
                : theme.colors.surface,
              alignSelf: isUser ? 'flex-end' : 'flex-start',
              margin: 8,
              maxWidth: '70%',
              borderRadius: 12,
            }}>
            <Card.Content>
              {!isUser && (
                <Avatar.Image
                  size={24}
                  source={{
                    uri: `https://source.unsplash.com/random/`,
                  }}
                />
              )}
              <Paragraph style={{ color: isUser ? 'white' : 'black' }}>
                jhdifhihio
              </Paragraph>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: isUser
                ? theme.colors.primary
                : theme.colors.surface,
              alignSelf: isUser ? 'flex-end' : 'flex-start',
              margin: 8,
              maxWidth: '70%', // Adjust as needed
              borderRadius: 12,
            }}>
            <Card.Content>
              {!isUser && (
                <Avatar.Image
                  size={24}
                  source={{
                    uri: `https://source.unsplash.com/random/`,
                  }}
                />
              )}
              <Paragraph style={{ color: isUser ? 'white' : 'black' }}>
                jhdifhihio
              </Paragraph>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: isUser
                ? theme.colors.primary
                : theme.colors.surface,
              alignSelf: isUser ? 'flex-end' : 'flex-start',
              margin: 8,
              maxWidth: '70%', // Adjust as needed
              borderRadius: 12,
              position: 'relative',
            }}>
            {!isUser && (
              <View
                style={{
                  position: 'absolute',
                  left: isUser ? -8 : 'auto',
                  right: isUser ? 'auto' : -8,
                  top: '50%',
                  marginTop: -8,
                  width: 0,
                  height: 0,
                  borderTopWidth: 8,
                  borderBottomWidth: 8,
                  borderLeftWidth: isUser ? 0 : 8,
                  borderRightWidth: isUser ? 8 : 0,
                  borderTopColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderLeftColor: isUser
                    ? 'transparent'
                    : theme.colors.surface,
                  borderRightColor: isUser
                    ? theme.colors.surface
                    : 'transparent',
                }}
              />
            )}
            <Card.Content>
              {!isUser && (
                <Avatar.Image
                  size={24}
                  source={{
                    uri: 'https://example.com/avatar.jpg', // Provide a URL or local path to the user's avatar
                  }}
                />
              )}
              <Paragraph style={{ color: isUser ? 'white' : 'black' }}>
                huiyuiyhuigui
              </Paragraph>
            </Card.Content>
          </Card>
          <CustomView className="flex flex-row py-1 items-center bg-gray-200">
            <IconButton onPress={() => {}} icon="emoticon-excited-outline" />
            <TextInput
              placeholder="Message"
              className="bg-white w-[73%] text-black placeholder:!text-black px-2 rounded-full"
            />
            <IconButton onPress={() => {}} icon="send" />
          </CustomView>
        </CustomView>
      </ScrollView>
    </CustomView>
  );
};

export default MessageScreen;

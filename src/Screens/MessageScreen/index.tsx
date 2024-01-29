import ChatBubble from '@/Components/MessageScreen/ChatBubble';
import showToast from '@/Helper';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/database';
import { RouteProp, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { RefreshControl, ScrollView, TextInput } from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Divider,
  IconButton,
  Menu,
  useTheme,
} from 'react-native-paper';
import Toast from 'react-native-toast-message';
interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const MessageScreen = ({ navigation }: any) => {
  const [message, setMessage] = useState('');
  const messagsRef = firebase.database().ref('messages');
  const [messages, setMesages] = useState < [Message] > ();
  const [visible, setVisible] = React.useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const { params: { name, email }, }: RouteProp<{}> = useRoute();

  const scrollViewRef = useRef < ScrollView | null > (null);
  const lastMessage = messages?.[messages.length - 1];
  const nextId = lastMessage ? lastMessage.id + 1 : 1;
  const reqBody: Message = {
    id: nextId,
    name,
    email,
    message,
    created_at: moment(new Date()).format(),
  };

  const clearFn = async () => {
    await AsyncStorage.clear();
    navigation.navigate('SignUp');
  };

  const handleSendMessage = async () => {
    const newMessageKey: any = messagsRef.push().key;
    if (message) {
      await messagsRef.child(newMessageKey).set(reqBody);
      setMessage('');
    } else {
      showToast('Type Something');
    }
  };
  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const getMesssages = async () => {
    const user: any = await AsyncStorage.getItem('user');
    const data = JSON.parse(user);

    const email = data?.email;

    const onValueChange = messagsRef.on('value', snapshot => {
      const data: Array<{
        id: number;
        name: string;
        email: string;
        message: string;
        created_at: string;
      }> = Object.values(snapshot.val()) || [];

      const sortedData: Array<{
        id: number;
        name: string;
        email: string;
        message: string;
        created_at: string;
      }> = data?.sort((a, b) => a.id - b.id);

      const filteredData: Array<{
        id: number;
        name: string;
        email: string;
        message: string;
        created_at: string;
      }> = sortedData?.filter(i => i.email === email);

      setMesages(prevState => {
        if (prevState === undefined) {
          return filteredData as [Message];
        } else {
          return filteredData as [Message];
        }
      });
    });

    return () => messagsRef.off('value', onValueChange);
  };
  useEffect(() => { getMesssages() }, []);

  const theme = useTheme();
  const handleRefresh = () => {
    setRefreshing(true);
    getMesssages();
    setRefreshing(false);
  };
  return (
    <>
      <CustomView style={{ backgroundColor: theme.colors.surface }}>
        <CustomView className="z-50">
          <Toast />
        </CustomView>
        <Appbar.Header elevated className="flex items-center">
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
                  <CustomText className="text-base">{name}</CustomText>
                  <CustomText>Online</CustomText>
                </CustomView>
              </CustomView>
            }
          />
          <Appbar.Action icon="magnify" onPress={() => { }} />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="dots-vertical" onPress={() => openMenu()} />
            }>
            <Menu.Item onPress={() => clearFn()} title="Logout" />

            <Divider />
          </Menu>
        </Appbar.Header>

        <CustomView className="flex flex-col justify-end min-h-full pb-32">
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}
              />
            }
            className="px-2"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollToBottom()}>
            {messages !== undefined ? (
              messages.map((i, index) => (
                <ChatBubble id={i.id} key={index} message={i} />
              ))
            ) : (
              <CustomView className="flex items-center justify-center h-96">
                <ActivityIndicator animating size={40} />
              </CustomView>
            )}
          </ScrollView>
          <CustomView
            style={{ backgroundColor: theme.colors.elevation.level1 }}
            className="flex flex-row items-center py-1">
            <IconButton onPress={() => { }} icon="emoticon-excited-outline" />
            <TextInput
              value={message}
              multiline
              numberOfLines={1}
              onChangeText={setMessage}
              placeholder="Message"
              style={{ backgroundColor: theme.colors.background }}
              className="px-4 w-[73%] dark:text-white rounded-full"
            />
            <IconButton onPress={() => handleSendMessage()} icon="send" />
          </CustomView>
        </CustomView>
      </CustomView>
    </>
  );
};

export default MessageScreen;

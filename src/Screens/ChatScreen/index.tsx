import CustomSearch from '@/Shared/CustomSearch';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import { firebase } from '@react-native-firebase/database';
import classNames from 'classnames';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Avatar, Divider, useTheme } from 'react-native-paper';

const ChatScreen = ({ navigation }: any) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [refreshing, setRefreshing] = useState(false);

  const usersRef = firebase.database().ref('users');

  useEffect(() => {
    const onValueChange = usersRef.on('value', snapshot => {
      const newData = snapshot.val();
      setUsers(Object.values(newData));
    });
    return () => usersRef.off('value', onValueChange);
  }, []);

  interface User {
    name: string;
    email: string;
    unread: string;
    created_at: string;
  }
  const theme = useTheme();
  const handleRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };
  return (
    <CustomView
      style={{ backgroundColor: theme.colors.surface }}
      className="flex flex-col h-screen">
      <CustomView className="px-4 py-2">
        <CustomSearch
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search on chat"
          traileringIcon="menu"
          className="px-2"
        />
      </CustomView>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {users.map(
          (
            { name, email, unread = '0', created_at }: User,
            index: number,
          ): any => {
            return (
              <CustomView key={index}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('Message', { name, email, created_at })
                  }>
                  <CustomView className="flex flex-row items-center gap-2 p-2">
                    <Avatar.Image
                      size={50}
                      source={{
                        uri: `https://source.unsplash.com/random/${index}`,
                      }}
                    />
                    <CustomView className="flex flex-row w-[80%] justify-between">
                      <CustomView className="flex flex-col gap-px">
                        <CustomText className="text-lg">{name}</CustomText>
                        <CustomText className="text-gray-500">
                          {name?.split(' ')?.[0]} : Hi There
                        </CustomText>
                      </CustomView>
                      <CustomView className="flex items-end justify-end gap-2">
                        {unread !== '0' && (
                          <CustomText className="bg-green-600 h-5 w-5 text-xs text-center p-0.5 rounded-full">
                            {unread}
                          </CustomText>
                        )}
                        <CustomText
                          className={classNames(
                            'text-sm',
                            unread !== '0' && 'text-green-500',
                          )}>
                          {moment(created_at).calendar()}
                        </CustomText>
                      </CustomView>
                    </CustomView>
                  </CustomView>
                </TouchableWithoutFeedback>
                <Divider />
              </CustomView>
            );
          },
        )}
      </ScrollView>
    </CustomView>
  );
};

export default ChatScreen;

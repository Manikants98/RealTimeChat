import { secondary } from '@/Helper';
import { data } from '@/Mock';
import CustomSearch from '@/Shared/CustomSearch';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { ScrollView, TouchableHighlight } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';

const ChatScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const chatList = data?.filter(i =>
    i.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <CustomView className="flex flex-col bg-white h-screen">
      <CustomView className="px-4 py-2 bg-white">
        <CustomSearch
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search on chat"
          traileringIcon="menu"
          className="bg-gray-200 px-2"
        />
      </CustomView>

      <ScrollView>
        {chatList.map(item => {
          return (
            <CustomView key={item.id}>
              <TouchableHighlight
                underlayColor={secondary}
                onPress={() => navigation.navigate('Message')}>
                <CustomView className="flex flex-row gap-2 p-2 items-center">
                  <Avatar.Image
                    size={50}
                    source={{
                      uri: `https://source.unsplash.com/random/${item.id}`,
                    }}
                  />
                  <CustomView className="flex flex-row w-[80%] justify-between">
                    <CustomView className="flex flex-col gap-px">
                      <CustomText className="text-lg">{item.title}</CustomText>
                      <CustomText className="text-gray-500">
                        {item.title.split(' ')?.[0]} : {item.recent_message}
                      </CustomText>
                    </CustomView>
                    <CustomView className="flex justify-end gap-2 items-end">
                      {item.unread !== 0 && (
                        <CustomText className="bg-green-600 h-5 w-5 text-xs text-center p-0.5 text-white rounded-full">
                          {item.unread}
                        </CustomText>
                      )}
                      <CustomText
                        className={classNames(
                          'text-sm',
                          item.unread !== 0 && 'text-green-500',
                        )}>
                        {moment(new Date()).calendar()}
                      </CustomText>
                    </CustomView>
                  </CustomView>
                </CustomView>
              </TouchableHighlight>
              <Divider />
            </CustomView>
          );
        })}
      </ScrollView>
    </CustomView>
  );
};

export default ChatScreen;

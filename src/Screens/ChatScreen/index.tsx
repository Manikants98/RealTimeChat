import React from 'react';
import {FlatList, View} from 'react-native';
import {
  Appbar,
  Avatar,
  Divider,
  IconButton,
  Searchbar,
  Text,
} from 'react-native-paper';
import {data} from '../../Mock';

const ChatScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View className="flex flex-col pb-16">
      <Appbar
        elevated
        className="flex bg-blue-600 flex-row items-center justify-between">
        <Text className="text-2xl p-4 text-white font-bold">
          Mani Kant Sharma
        </Text>
        <View className="flex items-center flex-row">
          <IconButton iconColor="white" icon="text-search" />
          <IconButton iconColor="white" icon="dots-vertical" />
        </View>
      </Appbar>
      <Divider />
      <View className="flex items-center p-2 flex-row">
        <Searchbar
          theme={{roundness: 2}}
          placeholder="Search"
          className="bg-blue-100"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <Divider />
      <FlatList
        data={data?.filter(i =>
          i.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <View className="flex flex-row gap-2 items-center p-2 w-full">
              <Avatar.Image
                size={55}
                source={{uri: `https://source.unsplash.com/random/${item.id}`}}
              />
              <View className="flex flex-col gap-px">
                <Text className="text-xl">{item.title}</Text>
                <Text className="text-gray-500">
                  {item.title.split(' ')?.[0]} : {item.recent_message}
                </Text>
              </View>
            </View>
            <Divider />
          </>
        )}
      />
    </View>
  );
};

export default ChatScreen;

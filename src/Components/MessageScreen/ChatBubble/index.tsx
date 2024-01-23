import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'react-native-paper';

const ChatBubble = ({ id, message }: any) => {
  const isUser = id % 2 === 0;
  const theme = useTheme();
  return (
    <CustomView
      key={id}
      className={classNames(
        'flex flex-row py-2',
        isUser ? 'justify-end' : 'justify-start',
      )}>
      <TouchableWithoutFeedback
        onLongPress={() => {
          Alert.alert('Triggerd');
        }}>
        <CustomView
          style={{ backgroundColor: theme.colors.elevation.level1 }}
          className={classNames(
            'max-w-[60%] flex shadow-xl flex-col gap-y-1 px-3 justify-end items-end py-1',
            isUser
              ? 'rounded-t-xl rounded-bl-xl'
              : 'rounded-t-xl rounded-br-xl',
          )}>
          <CustomText>{message.message}</CustomText>
          <CustomText className="text-xs text-gray-400">
            {moment(message.created_at).format('hh:mm a')}
          </CustomText>
        </CustomView>
      </TouchableWithoutFeedback>
    </CustomView>
  );
};

export default ChatBubble;

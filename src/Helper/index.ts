import Toast from 'react-native-toast-message';

interface ToastProps {
  type?: 'error' | 'success' | 'warning' | 'info';
  title?: string;
}

export default function showToast(message: string, props?: ToastProps) {
  const { title, type } = props || {};
  Toast.show({
    type,
    text1: title,
    text2: message,
    text1Style: { fontSize: 16 },
    text2Style: { fontSize: 14 },
  });
}

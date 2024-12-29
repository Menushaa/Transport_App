import React from 'react';
import { Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router';

interface HeaderProps {
  username?: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  const router = useRouter();

  return (
    <Appbar.Header style={{ backgroundColor: '#fb0f6a' }}> {/* Background Color */}
      <Appbar.Content
        title={username ? `Welcome, ${username}` : 'TransportApp'}
        titleStyle={{ color: '#FFFFFF', fontWeight: 'bold' }} // Text Color
      />
      {username && (
        <Appbar.Action
          icon="logout"
          onPress={() => router.replace('/login')}
          color="white" 
        />
      )}
    </Appbar.Header>
  );
};

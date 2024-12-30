
import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { AuthForm } from '../../components/AuthForm';

export default function Login() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const handleLogin = (data: any) => {
    // Simulate login process and show modal
    setModalVisible(true); // Show modal upon successful login

    setTimeout(() => {
      // Redirect to home page with username from email
      router.replace({
        pathname: '/home',
        params: { username: data.email.split('@')[0] },
      });
    }, 1000); // Display modal for 2 seconds before redirecting
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>SignIn to TransGo</Text>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <AuthForm type="login" onSubmit={handleLogin} />
      <Link href="/register" style={styles.link}>
        Don't have an account? Register
      </Link>

      {/* Modal to show "Login Successful" */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Login Successful!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)} // Close the modal when button is pressed
            >
              <Text style={styles.modalButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fb0f6a',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#fb0f6a',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4caf50', // Green for success message
  },
  modalButton: {
    backgroundColor: '#fb0f6a',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

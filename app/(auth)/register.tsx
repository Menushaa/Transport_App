import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { AuthForm } from '../../components/AuthForm';

export default function Register() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

    const handleRegister = (data: any) => {
        setModalVisible(true); // Show modal upon successful registration
        setTimeout(() => {
            router.replace('/login'); // Redirect after showing the modal for a few seconds
        }, 3000); // You can adjust the time as needed
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>SignUp to TransGo</Text>
            <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />

            <AuthForm type="register" onSubmit={handleRegister} />
            <Link href="/login" style={styles.link}>
                Already have an account? Login
            </Link>

            {/* Modal to show "Registration Successful" */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Registration Successful!</Text>
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
        marginBottom: 10,
        color: '#fb0f6a',
    },
    link: {
        marginTop: 0,
        textAlign: 'center',
        color: '#fb0f6a',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 10,
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

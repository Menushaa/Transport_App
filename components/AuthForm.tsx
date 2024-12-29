import { useForm } from '@/hooks/useForm';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

interface AuthFormProps {
    type: 'login' | 'register';
    onSubmit: (data: any) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
    const { values, errors, handleChange, validate } = useForm({
        email: '',
        password: '',
        ...(type === 'register' ? { username: '' } : {})
    });

    const handleSubmit = () => {
        if (validate()) {
            onSubmit(values);
        }
    };

    return (
        <View style={styles.container}>
            {type === 'register' && (
                <>
                    <TextInput
                        label="Username"
                        value={values.username}
                        onChangeText={(text) => handleChange('username', text)}
                        error={!!errors.username}
                        style={styles.input}
                        underlineColor="#fb0f6a"
                        activeUnderlineColor="#d10f5e"
                    />
                    <HelperText type="error" visible={!!errors.username}>
                        {errors.username}
                    </HelperText>
                </>
            )}
            <TextInput
                label="Email"
                value={values.email}
                onChangeText={(text) => handleChange('email', text)}
                error={!!errors.email}
                style={styles.input}
                underlineColor="#fb0f6a"
                activeUnderlineColor="#d10f5e"
                keyboardType="email-address"
            />
            <HelperText type="error" visible={!!errors.email}>
                {errors.email}
            </HelperText>
            <TextInput
                label="Password"
                value={values.password}
                onChangeText={(text) => handleChange('password', text)}
                error={!!errors.password}
                secureTextEntry
                underlineColor="#fb0f6a"
                activeUnderlineColor="#d10f5e"
                style={styles.input}
            />
            <HelperText type="error" visible={!!errors.password}>
                {errors.password}
            </HelperText>
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                {type === 'login' ? 'Login' : 'Register'}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    input: {
        marginBottom: 8,
        backgroundColor: '#f9dfe9',
    },
    button: {
        marginTop: 16,
        backgroundColor: '#fb0f6a',
    },
});
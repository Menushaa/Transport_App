import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

import { Link, router } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to TransGo</Text>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.description}>Simplify Your Journey with TransGo</Text>
      <Text style={styles.description2}>"Seamless, reliable, and hassle-free travel—your next ride is a tap away!"</Text>
      <Button mode="contained" style={styles.button} onPress={() => router.push('/(auth)/login')}>
        SignIn  
      </Button>
      <Button
        mode="outlined"
        style={[styles.button2, { borderColor: '#fb0f6a', borderWidth: 1 }]}
        onPress={() => router.push('/(auth)/register')}
      >      <Text style={{ color: '#fb0f6a' }}>SignUp </Text>
      </Button>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcecf2',

  },
  text: {
    fontSize: 30,
    color: '#fb0f6a',
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'psemibold',
  },
  description: {
    fontSize: 20,
    color: '#fb0f6a',
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'psemibold',
  },
  description2: {
    fontSize: 15,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'psemibold',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fb0f6a',
    width: 350,
  },
  button2: {
    marginTop: 16,
    backgroundColor: '#fff',
    width: 350,
  },
})
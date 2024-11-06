import { Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '@/constants/Login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth: any = FIREBASE_AUTH;

    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                router.push('/(tabs)/Pro')
            }
        } catch (error: any) {
            Alert.alert('Sign In Failed' + error.message)
            console.log(error.message)
        }
    }

    const signUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            Alert.alert('SignUp Failed' + error.message)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Login</Text>
                <View>
                    <KeyboardAvoidingView behavior='padding'>
                        <TextInput
                            value={email}
                            placeholder='Email'
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                        <TextInput
                            value={password}
                            placeholder='Password'
                            onChangeText={setPassword}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={signIn} style={styles.login}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signUp} style={styles.login}>
                        <Text style={styles.text}>Create User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login
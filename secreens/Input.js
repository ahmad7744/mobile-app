import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Input = () => {
    const [text, setText] = React.useState("");

    return (
        <View>
            <TextInput
                mode='flat'
                style={styles.input}
                label="UserName"
                
            />
        </View>

    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        width: 260,
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    Button: {
        backgroundColor: "black"
    }
});

export default Input;
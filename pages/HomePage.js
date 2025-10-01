import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles'; 

export default function HomePage({navigation}) {
    return(
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.headerText}>Home Page</Text>
            <View>
                <Button style={GlobalStyles.buttonContainer} title="Register" onPress={() => navigation.navigate('Register')} />
            </View>
        </View>
    );

}
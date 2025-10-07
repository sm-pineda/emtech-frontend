import { View, Text, Button, Alert } from 'react-native';
import { GlobalStyles } from '../styles';
import axios from 'axios';

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/registration/api/register/', formData);
            Alert.alert('Success', 'User registered successfully');
            navigation.goBack();
        } catch (error) {
            console.error('Error', JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }

    return (
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.headerText}>Review Information</Text>
            <Text>First Name: {formData.first_name}</Text>
            <Text>Last Name: {formData.last_name}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Password: {formData.password}</Text>
            <Text>Gender: {formData.gender}</Text>

            <View style={GlobalStyles.buttonContainer}>
                <Button title="Go back to edit" onPress={() => navigation.goBack()} />
            </View>    
            <View style={GlobalStyles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit}/>
            </View>

        </View>
    );
}

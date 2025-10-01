import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles'; 
import { useState } from 'react'; /* For managing form state */
import { TextInput } from 'react-native-web';

export default function RegisterPage({navigation}) {

const[formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: '',
});

const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
}

    return(
        <View style={GlobalStyles.screenContainer}>

            <Text style={GlobalStyles.headerText}>User Registration</Text>

            <TextInput placeholder='First Name' value={formData.first_name} onChangeText={(text)=> handleChange("first_name", text)}/>

            <TextInput placeholder='Last Name' value={formData.last_name} onChangeText={(text)=> handleChange("last_name", text)}/>

            <TextInput placeholder='Email' value={formData.email} onChangeText={(text)=> handleChange("email", text)}/>

            <TextInput placeholder='Password' value={formData.password} secureTextEntry onChangeText={(text)=> handleChange("password", text)}/>

            <TextInput placeholder='Gender' value={formData.gender} onChangeText={(text)=> handleChange("gender", text)}/>
        
        <View style={GlobalStyles.buttonContainer}>
            <Button title="Review and Submit" onPress={() => navigation.navigate("Review", {formData})} />
        </View>
        
        </View>

    );
}
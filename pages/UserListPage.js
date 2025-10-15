import {View, Text, FlatList, Button, Alert} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import { GlobalStyles } from '../styles'; 

export default function UserListPage({navigation}) {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/registration/api/users/')
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

const handleDelete = (id) => {
     //   Alert.alert(
     //       "Confirm Delete",
     //       "Are you sure you want to delete this user?",
    //        (
   //             {text: "Cancel", style: "cancel"},
     //           {   
     //               text: "Delete",
      //              style: "destructive",
     //               onPress: () => {
     //                   axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
     //                   .then(() => {
      //                      console.error(err);
      //                      Alert.alert("Success", "User deleted successfully");
     //                   });
      //              },
     //           }
     //       )
    //    );

        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
    };

    return (
        <View style={GlobalStyles.listScreenContainer}>
            <Text style={GlobalStyles.listHeader}>Registered Users</Text>
            <FlatList data={users} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                <View style={GlobalStyles.listItem}>
                    <Text>Firstname: {item.first_name}</Text>
                    <Text>Lastname: {item.last_name}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Gender: {item.gender}</Text>
                    <View>
                        <Button title="Edit" color="#34990cff" onPress={() => handleEdit(item)} />
                        <Button title="Delete" color="#a7080bff" onPress={() => handleDelete(item.id)}/>
                    </View>
                </View>
            )}/>
        </View>
    )
}
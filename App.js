import { View, Text, Button, LogBox, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./src/screens/HomeScreen";
import AddBlogScreen from "./src/screens/AddBlogScreen";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import BlogDetailsScreen from "./src/screens/BlogDetailsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import EditBlogScreen from './src/screens/EditBlogScreen'
LogBox.ignoreLogs(["Remote debugger"]);

const stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: [tw``, { backgroundColor: "#495C83" }],
                    headerTitleStyle: [tw`text-2xl`, { color: "#C8B6E2" }],
                    headerTintColor: { color: "#C8B6E2" },
                }}
            >
                <stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity>
                                <Entypo
                                    onPress={() => navigation.navigate("Add")}
                                    name="plus"
                                    size={30}
                                    color="green"
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <stack.Screen name="Add" component={AddBlogScreen} />
                <stack.Screen name="Edit" component={EditBlogScreen} />
                <stack.Screen
                    name="Details"
                    component={BlogDetailsScreen}
                    options={({ navigation, route }) => ({
                        headerRight: () => (
                            <TouchableOpacity>
                                <MaterialIcons
                                    onPress={() => navigation.navigate("Edit", {id: route.params.id})}
                                    name="edit"
                                    size={24}
                                    color="green"
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default function reduxWrapper() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}

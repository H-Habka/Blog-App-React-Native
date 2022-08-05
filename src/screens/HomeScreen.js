import { View, Text , FlatList, Button} from "react-native";
import {useSelector } from "react-redux";
import BlogList from "../components/BlogList";
import tw from "tailwind-react-native-classnames";


const HomeScreen = ({navigation}) => {
    const blogArray = useSelector((state) => state.blogSlice.blogArray)
    return (
        <View style={[tw`pt-2 h-full`, {backgroundColor : "#7A86B6"}]}>
            <BlogList navigation={navigation} blogArray={blogArray}/>
        </View>
    );
};

export default HomeScreen;

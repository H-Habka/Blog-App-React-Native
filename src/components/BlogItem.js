import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { deleteBlog } from "../../redux/features/bolgSlice";

const BlogItem = ({ item , navigation}) => {
    const dispatch = useDispatch();

    const handleDeleteBlog = () => {
        dispatch(deleteBlog(item.id));
    };

    const handleItemPress = () => {
        navigation.navigate("Details", {id : item.id})
    }

    return (
        <Pressable onPress={handleItemPress}>
            <View style={[tw`border px-3 py-2 flex-row justify-between my-1 rounded-xl border-2`, {backgroundColor : "#A8A4CE"}]}>
                <Text style={tw`text-2xl font-bold`}>{item.title}</Text>
                <TouchableOpacity onPress={handleDeleteBlog}>
                    <AntDesign name="delete" size={30} color="red" />
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

export default BlogItem;

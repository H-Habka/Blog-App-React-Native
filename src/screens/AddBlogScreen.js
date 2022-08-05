import { View, Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import TextInputComponent from "../components/TextInputComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../redux/features/bolgSlice";

const AddBlogScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const handleSavePress = () => {
        if(!title || !content) alert("Some Data Is Missing")
        else {
            dispatch(addBlog({title, content, id : Date.now()}))
            setTitle("")
            setContent("")
            navigation.navigate("Home")
        }
        
    }
    return (
        <View style={[tw`pt-2 h-full px-4`, { backgroundColor: "#7A86B6" }]}>
            <TextInputComponent title="Enter Title" value={title} setValue={setTitle}/>
            <TextInputComponent title="Enter Content"  value={content} setValue={setContent}/>
            <View style={[tw`justify-center flex-row`]}>
                <Pressable
                    style={[
                        tw`border px-4 py-2 rounded-2xl mt-6 overflow-hidden`,
                        { backgroundColor: "#A8A4CE" },
                    ]}
                    android_ripple={{ color: "green" }}
                    onPress={handleSavePress}
                >
                    <Text style={[tw`text-3xl font-bold`]}>Save</Text>
                </Pressable>
            </View>
        </View>
    );
};


export default AddBlogScreen;

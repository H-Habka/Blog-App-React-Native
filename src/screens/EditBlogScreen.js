import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import { addBlog , deleteBlog} from "../../redux/features/bolgSlice";
import TextInputComponent from "../components/TextInputComponent";
import { useDispatch,useSelector } from "react-redux";
const EditBlogScreen = ({ route, navigation }) => {
    const allItems = useSelector((state) => state.blogSlice.blogArray);
    const id = route.params.id
    const blogItemDetails = allItems.filter((item) => item.id === id);
    const [title, setTitle] = useState(blogItemDetails[0].title);
    const [content, setContent] = useState(blogItemDetails[0].content);
    

    const dispatch = useDispatch()

    const handleSavePress = () => {
        if(!title || !content) alert("Some Data Is Missing")
        else {
            dispatch(deleteBlog(id))
            dispatch(addBlog({title, content, id}))
            setTitle("")
            setContent("")
            navigation.navigate("Home")
        }
        
    }

    return (
        <View style={[tw`pt-2 h-full px-4`, { backgroundColor: "#7A86B6" }]}>
            <TextInputComponent
                title="Enter New Title"
                value={title}
                setValue={setTitle}
            />
            <TextInputComponent
                title="Enter New Content"
                value={content}
                setValue={setContent}
            />
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

export default EditBlogScreen;

import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

const BlogDetailsScreen = ({ route }) => {
    const id = route.params.id;
    const allItems = useSelector((state) => state.blogSlice.blogArray);
    const blogItemDetails = allItems.filter((item) => item.id === id);

    useEffect(() => {}, [id]);
    return (
        <View style={[tw`pt-2 h-full px-4`, { backgroundColor: "#7A86B6" }]}>
            <View
                style={[
                    tw`border mt-10 p-3 rounded-2xl overflow-hidden`,
                    { backgroundColor: "#A8A4CE" },
                ]}
            >
                <Text style={[tw`text-3xl underline font-bold`]}>
                    {blogItemDetails[0].title}
                </Text>
                <Text style={[tw`text-2xl mt-2`]}>
                    {blogItemDetails[0].content}
                </Text>
            </View>
        </View>
    );
};

export default BlogDetailsScreen;

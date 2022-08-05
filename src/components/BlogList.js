import { View, Text , FlatList} from "react-native";
import {useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import BlogItem from "./BlogItem";

const BlogList = ({blogArray, navigation}) => {
  return (
    <View style={tw`p-2`}>
        <FlatList data={blogArray} keyExtractor={(item =>item.id )} renderItem={({item}) => <BlogItem navigation={navigation} item={item}/>}/>
    </View>
  )
}

export default BlogList
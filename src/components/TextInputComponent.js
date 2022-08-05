import { View, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

const TextInputComponent = ({ title, value, setValue }) => {
    return (
        <View style={[tw`p-4`]}>
            <Text style={[tw`text-2xl`]}>{title}</Text>
            <TextInput
                onChangeText={(newValue) => setValue(newValue)}
                value={value}
                style={[
                    tw`border p-2 rounded-xl mt-2 text-xl font-semibold text-gray-900`,
                ]}
            />
        </View>
    );
};

export default TextInputComponent;

import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryListItem ({ color, id, title }) {
    return (
        <View key={id} style={[styles.outerViewStyles, { backgroundColor: color }]}>
            <Pressable>
                <View>
                    <Text>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerViewStyles: {
        flex: 1,
        margin: 12,
        height: 100,
        borderRadius: 10
    }
})
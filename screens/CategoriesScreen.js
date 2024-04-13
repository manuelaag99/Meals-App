import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../dummy-data";
import CategoryListItem from "../components/CategoryListItem";

export default function CategoriesScreen ({}) {
    console.log(CATEGORIES)
    function renderFlatListItem (itemData) {
        return (
            <CategoryListItem color={itemData.item.color} id={itemData.item.id} key={itemData.item.id} title={itemData.item.title} />
        )
    }
    return (
        <FlatList data={CATEGORIES} horizontal={false} keyExtractor={(item) => item.id} numColumns={2} renderItem={renderFlatListItem} />
    )
}
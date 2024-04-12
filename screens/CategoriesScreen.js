import { FlatList } from "react-native";
import { CATEGORIES } from "../dummy-data";

export default function CategoriesScreen ({}) {
    return (
        <FlatList data={CATEGORIES} />
    )
}
export function CategoryHandler(selectedCategories: string[], cat: string) {
    const idx = selectedCategories.indexOf(cat);
    idx === -1 ? selectedCategories.push(cat) : selectedCategories.splice(idx, 1);

    return idx === -1;
}

export default CategoryHandler;
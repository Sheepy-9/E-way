export interface product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    rating: number; // 1 to 5
    image: string;
}

export const products: product[] = [
    { id: 1, name: "Organic Apples", price: 2.99, category: "Fruits", inStock: true, rating: 4, image: "https://dm.apac.cms.aldi.cx/is/image/aldiprodapac/product/jpg/scaleWidth/500/77ad23a7-45bc-4268-81a4-0176569fe4f3/Royal%20Gala%20Apples%201kg" },
    { id: 2, name: "Whole Wheat Bread", price: 1.99, category: "Bakery", inStock: true, rating: 5, image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a174e682-309d-4ae6-bee5-dd5d9e21a593.jpg" },
    { id: 3, name: "Almond Milk", price: 3.49, category: "Dairy Alternatives", inStock: false, rating: 4, image: "https://dm.emea.cms.aldi.cx/is/image/aldiprodeu/product/jpg/scaleWidth/500/f91f11c0-db27-4dfd-9fb7-70ea9d3409d8/UHT%20Unsweetened%20Almond%20Drink" },
    { id: 4, name: "Free Range Eggs", price: 2.79, category: "Dairy", inStock: true, rating: 5, image: "https://dm.cms.aldi.cx/is/image/prod1amer/product/jpg/scaleWidth/500/c66b7d0b-28ef-4204-940a-d704939f5ae0/Pasture%20Raised%20Large%20Brown%20Eggs%20Grade%20A%2012%20count" },
    { id: 5, name: "Chicken Breast", price: 5.99, category: "Meat", inStock: true, rating: 4, image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_675f5f18-b97c-4b6c-9943-36dcf4f9892c.jpg" },
    { id: 6, name: "Broccoli", price: 1.49, category: "Vegetables", inStock: false, rating: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNBqC6-R687t6oJx-M12XgauH7ookP5Gk3g&s" },
    { id: 7, name: "Greek Yogurt", price: 2.29, category: "Dairy", inStock: true, rating: 5, image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e1687237-629e-499a-b213-e40fae5b59ec.jpg" },
    { id: 8, name: "Orange Juice", price: 2.59, category: "Beverages", inStock: true, rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5bU188lg5K6xImk12Dq0mr7RAbbYFdJYnA&s" }
];

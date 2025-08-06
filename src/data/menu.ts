// data/menu.ts

export type MenuItem = {
  id: number
  title: string
  category: "Breakfast" | "Grilled" | "Drinks"
  image: string
  description: string
  price: number
}

export const menuItems: MenuItem[] = [
  // 🍳 Breakfast
  {
  id: 1,
  title: "Zaatar Manakish",
  category: "Breakfast",
  image: "/images/break-1.jpg",
  description: "Traditional Levantine flatbread topped with a savory blend of zaatar, olive oil, and sesame seeds. Baked to perfection and served warm.",
  price: 1
},
  {
  id: 2,
  title: "Falafel Wrap",
  category: "Breakfast",
  image: "/images/break2.jpg", 
  description: "Crispy golden falafel balls served in warm pita bread, loaded with fresh vegetables, parsley, and a drizzle of tahini sauce.",
  price: 2
},
 {
  id: 3,
  title: "Olive & Cheese Antipasto",
  category: "Breakfast",
  image: "/images/break-3.jpg", 
  description: "An elegant Mediterranean starter featuring a medley of green and Kalamata olives, paired with creamy fresh cheese and drizzled with extra virgin olive oil, finished with aromatic herbs. Perfect for sharing or savoring solo.",
  price: 4
},

  {
  id: 4,
  title: "Shakshuka Delight",
  category: "Breakfast",
  image: "/images/break-4.jpg",
  description: "A sizzling skillet of poached eggs nestled in a rich tomato and pepper sauce, garnished with fresh herbs. A Middle Eastern classic perfect for a warm, hearty start to your day.",
  price: 5
},


  // 🔥 Grilled
  {
  id: 5,
  title: "Herbed Chicken Skewers",
  category: "Grilled",
  image: "/images/Grilled-1.jpg",
  description: "Tender chunks of chicken grilled on skewers, marinated with aromatic herbs and spices. Served with creamy garlic sauce and fresh seasonal vegetables.",
  price: 10
},
  {
  id: 6,
  title: "Grilled Lamb Kofta Skewers",
  category: "Grilled",
  image: "/images/Grilled-2.jpg",
  description: "Juicy skewers of seasoned lamb kofta grilled to perfection, served with creamy garlic sauce, fresh herbs, and warm flatbread.",
  price: 15
},
  {
  id: 7,
  title: "Chicken Fajita Skillet",
  category: "Grilled",
  image: "/images/Grilled-3.jpg",
  description: "Sizzling grilled chicken strips tossed with colorful bell peppers and onions, seasoned with bold Mexican spices and herbs.",
  price: 12,
},

  {
  id: 8,
  title: "BBQ Chicken Wings & Fries",
  category: "Grilled",
  image: "/images/Grilled-4.jpg",
  description: "Crispy and juicy BBQ-glazed chicken wings served with golden French fries and dipping sauces.",
  price: 14,
},


  // 🥤 Drinks
 {
  id: 9,
  title: "Watermelon Cooler",
  category: "Drinks",
  image: "/images/Drinks-1.jpg",
  description: "A chilled and juicy blend of fresh watermelon cubes, a hint of mint, and a splash of lime—perfect for hot summer days.",
  price: 4,
},
  {
    id: 10,
    title: "Sparkling Lemonade",
    category: "Drinks",
    image: "/images/Drinks-2.jpg",
    description: "Chilled sparkling lemonade with fresh lemon juice and mint sprigs.",
    price: 3,
  },
  {
    id: 11,
    title: "Iced Latte",
    category: "Drinks",
    image: "/images/Drinks-3.jpg",
    description: "Smooth espresso over ice, blended with cold milk and a hint of vanilla.",
    price: 5,
  },
  {
  id: 12,
  title: "Fresh Apple Juice",
  category: "Drinks",
  image: "/images/Drinks-4.jpg",
  description: "Crisp and naturally sweet apple juice made from freshly pressed apples, served cold with thin slices for a refreshing finish.",
  price: 4,
}
]

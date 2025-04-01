const products = [
  {
    id: 1,
    name: "Fresh Kashmiri Apples",
    price: 120,
    image: "https://img.freepik.com/free-photo/delicious-red-apples-isolated-white-table_114579-67401.jpg?semt=ais_hybrid",
    category: "Fruits",
    ratings: 4.4,
    stock: 50,
    description: "Juicy and fresh Kashmiri apples, rich in vitamins and antioxidants. These apples have a natural sweetness and crisp texture, making them perfect for snacking. They are cultivated in the pristine valleys of Kashmir, ensuring high quality. A great source of fiber, they aid digestion and promote gut health. Enjoy them as is or use them in fruit salads and desserts."
  },
  {
    id: 2,
    name: "Organic Yelakki Bananas",
    price: 60,
    image: "https://img.freepik.com/free-photo/bananas-white-background_1187-1671.jpg?ga=GA1.1.688489372.1743487562&semt=ais_hybrid",
    category: "Fruits",
    ratings: 4.5,
    stock: 30,
    description: "Sweet and small-sized Yelakki bananas, perfect for a healthy snack. These bananas are organically grown, free from harmful chemicals and pesticides. They are rich in potassium, helping in maintaining heart and muscle health. A perfect energy booster, they are commonly used in smoothies and breakfast bowls. Their naturally sweet taste makes them an excellent choice for kids and adults alike."
  },
  {
    id: 3,
    name: "Happilo Almonds 250g",
    price: 350,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoH_Z9LRVSTYVJlVTJDs_mzeJ1MwJU4y5Anr8Oshcj_3V1xWjNTbpDcKHhK94mjTjF5gV3Y_RTVezTK1r32TWZHGzY9kmeA-G7gnmaNTc",
    category: "Nuts & Dry Fruits",
    ratings: 4.2,
    stock: 20,
    description: "Premium quality Californian almonds from Happilo, rich in nutrients. These almonds are packed with healthy fats, proteins, and fiber, making them a great snack. They are sourced from the best farms to ensure freshness and quality. Almonds are known to improve brain function and overall health. They can be eaten raw, soaked, or added to various dishes and desserts."
  },
  {
    id: 4,
    name: "Britannia Whole Wheat Bread",
    price: 40,
    image: "https://www.bigbasket.com/media/uploads/p/xxl/40314806_1-britannia-100-whole-wheat-sandwich-bread.jpg",
    category: "Bakery",
    ratings: 4.6,
    stock: 15,
    description: "Soft and fresh whole wheat bread by Britannia, perfect for breakfast. This bread is made from 100% whole wheat, providing a healthy alternative to refined flour bread. It is rich in fiber, aiding digestion and keeping you full for longer. Ideal for making sandwiches, toast, or even quick snacks. Enjoy it with butter, jam, or fresh vegetables for a nutritious meal."
  },
  {
    id: 5,
    name: "Amul Gold Full Cream Milk 1L",
    price: 75,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQP_6L7hUVBVJL1OGKVnY4gq-vdmoRoGbQzATotU_vhhw4-jHLDD39Xl2fyFWscU912bC-6s100j8XJY3oY75EqweiIkASxL0f83V1R1mBmXD53p7prbO15CkY",
    category: "Dairy",
    ratings: 4.9,
    stock: 40,
    description: "Rich and creamy full cream milk from Amul, ideal for tea and coffee. This milk is sourced from high-quality dairy farms to ensure freshness. Packed with essential nutrients like calcium and protein, it supports bone health. It can be used for drinking, making sweets, or preparing delicious milk-based beverages. A household essential, it is trusted by millions for its purity and taste."
  },
  {
    id: 6,
    name: "Lay's West Indies Hot 'N' Sweet Chilli Potato Chips",
    price: 90,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZucNka_juIvzpAZ-Tc1Zpt-ZgT9tk9EaiXXdlhW4zMvXH3VJcwCxLmX2NwRNDGF9mQi1k5u96yHl0Z0ihBoYyqVhDBoZxpf0QsVQ_dtSfd96pBUR6yRAYdQ",
    category: "Snacks",
    ratings: 3.9,
    stock: 25,
    description: "Lay's West Indies Hot 'N' Sweet Chilli Potato Chips"
  },
  {
    id: 7,
    name: "India Gate Basmati Rice 5kg",
    price: 550,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp_ZQZl7nxwF2cxzLXfYvq96iYB58rpLrML1N2tR0TyEsT-Rj80g-yjmX7bDCU5QphbMhdcM0KqyUq7_LvJqpzCa5-oVTzxpN_GGYxtCyMvWeBfdnDBqMp",
    category: "Grains & Pulses",
    ratings: 4.2,
    stock: 10,
    description: "Aromatic and long-grain India Gate Basmati rice, ideal for biryanis."
  },
  {
    id: 8,
    name: "Fortune Sunflower Oil 1L",
    price: 900,
    image: "https://cdn.quicksell.co/-M8EPZhy-KV-3Y3hUjYs/products/-MeU0QpNXSS3ISrRYwLC.jpg",
    category: "Oils",
    ratings: 4.1,
    stock: 12,
    description: "Light and healthy refined sunflower oil from Fortune, suitable for cooking."
  },
  {
    id: 9,
    name: "Kissan Tomato Ketchup 500g",
    price: 110,
    image: "https://www.jiomart.com/images/product/original/490000797/kissan-fresh-tomato-ketchup-500-g-product-images-o490000797-p490000797-0-202206241213.jpg?im=Resize=(420,420)",
    category: "Sauces",
    ratings: 4.8,
    stock: 18,
    description: "Thick and tangy tomato ketchup from Kissan, made with real tomatoes."
  },
  {
    id: 10,
    name: "Tata Green Tea",
    price: 250,
    image: "https://m.media-amazon.com/images/I/61e02+S1K+L._SX679_.jpg",
    category: "Beverages",
    ratings: 3.4,
    stock: 35,
    description: "Refreshing green tea from Tata, packed with antioxidants for a healthy start."
  },
  {
    id: 11,
    name: "Parle-G Original Glucose Biscuits 800g",
    price: 90,
    image: "https://m.media-amazon.com/images/I/71bufOt9zAL._SX679_.jpg",
    category: "Biscuits",
    ratings: 4.7,
    stock: 50,
    description: "Parle-G is India’s most loved and trusted glucose biscuit brand. Packed with the goodness of wheat and milk, it provides instant energy. These biscuits have a nostalgic taste that has been cherished for generations. Ideal for tea-time snacking or as a quick energy booster. Affordable and widely available, it's a household staple across the country."
  },
  {
    id: 12,
    name: "Britannia Bourbon Chocolate Cream Biscuits",
    price: 40,
    image: "https://www.bbassets.com/media/uploads/p/l/40001603_22-britannia-bourbon-chocolate-cream-biscuits.jpg",
    category: "Biscuits",
    ratings: 4.5,
    stock: 30,
    description: "Britannia Bourbon biscuits offer a delicious chocolatey experience with every bite. The rich cocoa biscuits are sandwiched with smooth, luscious chocolate cream. They are sprinkled with sugar crystals to add an extra crunch. Perfect for satisfying chocolate cravings at any time of the day. Enjoy them with milk, tea, or as a standalone treat."
  },
  {
    id: 13,
    name: "Maggi 2-Minute Instant Noodles",
    price: 60,
    image: "https://m.media-amazon.com/images/I/71T0QfFl+3L._SX679_.jpg",
    category: "Snacks",
    ratings: 4.8,
    stock: 25,
    description: "Maggi is India’s favorite instant noodle brand, loved by kids and adults alike. It is quick to prepare and makes for a convenient snack or meal. The signature masala taste is a perfect blend of spices, making it an irresistible comfort food. Ideal for late-night cravings or a quick office lunch. Enjoy it plain or customize it with vegetables and eggs."
  },
  {
    id: 14,
    name: "Kurkure Masala Munch",
    price: 20,
    image: "https://m.media-amazon.com/images/I/71sOPzrW0mL._AC_UL640_FMwebp_QL65_.jpg",
    category: "Snacks",
    ratings: 4.3,
    stock: 40,
    description: "Kurkure Masala Munch is a crispy and spicy corn snack with a unique desi flavor. It delivers a satisfying crunch with every bite and is perfect for those who love bold flavors. The masala seasoning is a blend of Indian spices, making it irresistibly tasty. It is a great companion for tea-time or movie nights. Enjoy the crunch anytime, anywhere!"
  },
  {
    id: 15,
    name: "Haldiram's Aloo Bhujia 400g",
    price: 120,
    image: "https://m.media-amazon.com/images/I/51CazxvAl9L._AC_UL640_FMwebp_QL65_.jpg",
    category: "Snacks",
    ratings: 4.6,
    stock: 20,
    description: "Haldiram’s Aloo Bhujia is a crunchy and flavorful namkeen made from gram flour and potatoes. It has a mildly spicy and tangy taste, making it a perfect tea-time snack. It can also be used as a topping for chaats and other Indian dishes. The fine texture and rich taste make it a favorite among all age groups. Packed in an airtight bag to maintain freshness and crispiness."
  },
  {
    id: 16,
    name: "Sunfeast Dark Fantasy Choco Fills",
    price: 120,
    image: "https://m.media-amazon.com/images/I/51nzo6uN50L._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Biscuits",
    ratings: 4.7,
    stock: 18,
    description: "Sunfeast Dark Fantasy Choco Fills is a premium indulgence for chocolate lovers. Each bite reveals a rich, molten choco filling inside a crisp biscuit shell. It is perfect for satisfying sweet cravings or pairing with coffee. The luxurious taste makes it a delightful treat for special moments. Enjoy the heavenly chocolate experience in every bite."
  },
  {
    id: 17,
    name: "Lays Classic Salted Potato Chips",
    price: 40,
    image: "https://m.media-amazon.com/images/I/71BcI16rCXL._AC_UL640_FMwebp_QL65_.jpg",
    category: "Snacks",
    ratings: 4.4,
    stock: 35,
    description: "Lay’s Classic Salted Chips are made from the finest quality potatoes. They are light, crispy, and seasoned with just the right amount of salt. The perfect companion for movie nights, road trips, and parties. Their irresistible crunch makes them a favorite among snack lovers. Enjoy them as they are or with a dip for extra flavor."
  },
  {
    id: 18,
    name: "Hide & Seek Fab Chocolate Cream Biscuits",
    price: 30,
    image: "https://m.media-amazon.com/images/I/713ZERAwHEL._SX679_.jpg",
    category: "Biscuits",
    ratings: 4.3,
    stock: 22,
    description: "Hide & Seek Fab biscuits are delicious chocolate cream-filled treats. The biscuits are crunchy and have a rich cocoa taste. The smooth chocolate cream filling adds a burst of flavor with every bite. These biscuits are a favorite among kids and chocolate lovers. Enjoy them as a snack or pair them with milk for a delightful combination."
  },
  {
    id: 19,
    name: "NutriChoice Digestive Biscuits",
    price: 80,
    image: "https://m.media-amazon.com/images/I/71YtMNXBUCL._AC_UL640_FMwebp_QL65_.jpg",
    category: "Biscuits",
    ratings: 4.5,
    stock: 28,
    description: "NutriChoice Digestive Biscuits are a healthy and tasty snack option. They are made with whole wheat and are rich in fiber. These biscuits aid digestion and are a great alternative to regular tea-time snacks. They contain no trans fat and are ideal for those looking for a nutritious snack. Enjoy them with tea, coffee, or as a light bite anytime."
  },
  {
    id: 20,
    name: "Bingo Mad Angles Tomato Madness",
    price: 25,
    image: "https://m.media-amazon.com/images/I/81UJbyUCE0L._AC_UL640_FMwebp_QL65_.jpg",
    category: "Snacks",
    ratings: 4.2,
    stock: 30,
    description: "Bingo Mad Angles Tomato Madness is a deliciously crunchy snack. Each triangle-shaped chip is packed with a tangy and mildly spicy tomato flavor. It has a unique texture that gives an enjoyable crunch. Perfect for quick snacking or as a party treat. Once you start eating, it’s hard to stop!"
  }
];

export default products;

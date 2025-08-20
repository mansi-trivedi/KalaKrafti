const products = [
  {
    sku: "wool-scarf-001",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
  {
    sku: "organic-tea-002",
    name: "Organic Tea",
    category: "Mandala Art",
    price: "Rs 1399",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-6.jpg",
  },
  {
    sku: "wooden-toy-003",
    name: "Wooden Toy",
    category: "Wooden toys",
    price: "Rs 3899",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-5.jpg",
  },
  {
    sku: "organic-cookies-004",
    name: "Organic Cookies",
    category: "Mandala Art",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-7.jpg",
  },
  {
    sku: "camomile-soap-005",
    name: "Camomile Soap",
    category: "Homemade cosmetics",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-8.jpg",
  },
  {
    sku: "wind-chimes-006",
    name: "Wind Chimes",
    category: "Lippan Art",
    price: "Rs 2500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-4.jpg",
  },
  {
    sku: "dark-chocolate-007",
    name: "Dark Chocolate",
    category: "Mandala Art",
    price: "Rs 1799",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-3.jpg",
  },
  {
    sku: "cinnamon-alba-008",
    name: "Cinnamon Alba",
    category: "Mandala Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-2.jpg",
  },
  {
    sku: "organic-cookies-009",
    name: "Organic Cookies",
    category: "Mandala Art",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-7.jpg",
  },
  {
    sku: "wooden-toy-010",
    name: "Wooden Toy",
    category: "Wooden toys",
    price: "Rs 3899",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-5.jpg",
  },
  {
    sku: "dark-chocolate-011",
    name: "Dark Chocolate",
    category: "Mandala Art",
    price: "Rs 1799",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-3.jpg",
  },
  {
    sku: "camomile-soap-012",
    name: "Camomile Soap",
    category: "Homemade cosmetics",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-8.jpg",
  },
  {
    sku: "organic-tea-013",
    name: "Organic Tea",
    category: "Mandala Art",
    price: "Rs 1399",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-6.jpg",
  },
  {
    sku: "wind-chimes-014",
    name: "Wind Chimes",
    category: "Lippan Art",
    price: "Rs 4499",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-4.jpg",
  },
  {
    sku: "cinnamon-alba-015",
    name: "Cinnamon Alba",
    category: "Mandala Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-2.jpg",
  },
  {
    sku: "wool-scarf-016",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
  {
    sku: "organic-cookies-017",
    name: "Organic Cookies",
    category: "Mandala Art",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-7.jpg",
  },
  {
    sku: "wool-scarf-018",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
  {
    sku: "camomile-soap-019",
    name: "Camomile Soap",
    category: "Homemade cosmetics",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-8.jpg",
  },
  {
    sku: "organic-tea-020",
    name: "Organic Tea",
    category: "Mandala Art",
    price: "Rs 1399",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-6.jpg",
  },
  {
    sku: "wool-scarf-021",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
  {
    sku: "wind-chimes-022",
    name: "Wind Chimes",
    category: "Lippan Art",
    price: "Rs 4499",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-4.jpg",
  },
  {
    sku: "wooden-toy-023",
    name: "Wooden Toy",
    category: "Wooden toys",
    price: "Rs 3899",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-5.jpg",
  },
  {
    sku: "dark-chocolate-024",
    name: "Dark Chocolate",
    category: "Mandala Art",
    price: "Rs 1799",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-3.jpg",
  },
  {
    sku: "cinnamon-alba-025",
    name: "Cinnamon Alba",
    category: "Mandala Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-2.jpg",
  },
  {
    sku: "wool-scarf-026",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
  {
    sku: "camomile-soap-027",
    name: "Camomile Soap",
    category: "Homemade cosmetics",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-8.jpg",
  },
  {
    sku: "organic-cookies-028",
    name: "Organic Cookies",
    category: "Mandala Art",
    price: "Rs 3375",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-7.jpg",
  },
  {
    sku: "wooden-toy-029",
    name: "Wooden Toy",
    category: "Wooden toys",
    price: "Rs 3899",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-5.jpg",
  },
  {
    sku: "dark-chocolate-030",
    name: "Dark Chocolate",
    category: "Mandala Art",
    price: "Rs 1799",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-3.jpg",
  },
  {
    sku: "wind-chimes-031",
    name: "Wind Chimes",
    category: "Lippan Art",
    price: "Rs. 2500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-4.jpg",
  },
  {
    sku: "cinnamon-alba-032",
    name: "Cinnamon Alba",
    category: "Mandala Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/shop-1-img-2.jpg",
  },
  {
    sku: "wool-scarf-033",
    name: "Wool Scarf",
    category: "Mosaic Art",
    price: "Rs 4500",
    image:
      "https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/shop-1-img-1.jpg",
  },
];

export { products };

let products = [
    {sku: "001",
    name: "Bracelet",
    category: "Jewelry",
    price: 15,
    inventory: 10     
    },
    {sku: "002",
    name: "Shirt",
    category: "Clothing",
    price: 6,
    inventory: 20     
    },
    {sku: "003",
    name: "Sandals",
    category: "Shoes",
    price: 30,
    inventory: 5  
    },
    {sku: "004",
    name: "Hair Tie",
    category: "Hair",
    price: 2,
    inventory: 35     
    },
    {sku: "005",
    name: "Nail Polish",
    category: "Nails",
    price: 8,
    inventory: 25     
    }
];

for (let product of products) {
    let discount = 0;

    switch (product.category) {
        case "Jewelry":
            discount = 0.2;
            break;
        case "Shoes":
        case "Clothing":
            discount = 0.1;
            break;
        case "Nails":
            discount = 0.15;
            break;
        case "Hair":
            discount = 0.05;
            break;
        default:
            discount = 0;
    }
let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice.toFixed(2);
};

console.log(products);

let customerType = "student"
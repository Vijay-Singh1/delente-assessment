// let products = [
//     { id: 1, name: 'Product 1', price: 100 },
//     { id: 2, name: 'Product 2', price: 200 }
//   ];
  
//   export default function handler(req, res) {
//     if (req.method === 'GET') {
//       res.status(200).json(products);
//     } else if (req.method === 'POST') {
//       const newProduct = { id: Date.now(), ...req.body };
//       products.push(newProduct);
//       res.status(201).json(newProduct);
//     }
//   }
  

// In-memory array to store products
let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request - return list of products
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    // Handle POST request - add a new product
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Product name and price are required' });
    }

    const newProduct = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      price: parseFloat(price) // Ensure price is a number
    };

    // Add the new product to the array
    products.push(newProduct);

    // Return the newly added product
    res.status(201).json(newProduct);
  } else {
    // Handle other HTTP methods, if needed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

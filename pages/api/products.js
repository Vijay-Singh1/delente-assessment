let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(products);
    } else if (req.method === 'POST') {
      const newProduct = { id: Date.now(), ...req.body };
      products.push(newProduct);
      res.status(201).json(newProduct);
    }
  }
  
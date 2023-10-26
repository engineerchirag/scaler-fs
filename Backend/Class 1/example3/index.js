const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><body><h1>Hello World!</h1></body></html>');
        res.end();
    }

    if (req.url === '/about-us') {
        res.write('<html><body><h1>About Us!</h1></body></html>');
        res.end();
    }

    if (req.url === '/contact-us') {
        res.write('<html><body><h1>Contact Us!</h1></body></html>');
        res.end();
    }

    if (req.url === '/api/products') {
        const products = [{
            id: 1,
            name: 'Product 1',
        }, {
            id: 2,
            name: 'Product 2',
        }, {
            id: 3,
            name: 'Product 3',
        }]
        res.setHeader('Content-Type', 'application/json');
        try {
            res.end(JSON.stringify(products));
        } catch(e) {
            res.statusCode = 500;
            res.end('Something went wrong!');
        }        
    }
    
});

server.listen(5010, () => {
    console.log('Server is running on http://localhost:5010');
});
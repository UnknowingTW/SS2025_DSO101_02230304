const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send({ message: 'Greetings from CI/CD pipeline powered by Jenkins!' });
});

app.get('/health', function (req, res) {
    const response = {
        status: 'UP',
        timestamp: new Date().toISOString()
    };
    res.status(200).json(response);
});

if (require.main === module) {
    app.listen(PORT, function () {
        console.log(`Application is live on port ${PORT}`);
    });
}

module.exports = app;


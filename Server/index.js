const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "online",
            service: "Instar Cloud"
        }));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        status: "error",
        message: "Not Found"
    }));
});

server.listen(PORT, () => {
    console.log(`Instar Cloud running on port ${PORT}`);
});

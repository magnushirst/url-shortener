const app = require("./app");

const port = 3001;
app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `listening on port ${port}!`);
});


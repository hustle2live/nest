const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res, next) => {
   res.send('Hello My First Server: Node + PostGreSQL =)');
});

app.listen(PORT, () => console.log(`this server started at port ${PORT}`));

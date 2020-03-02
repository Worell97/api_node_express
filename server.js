const app = require('./config/express')();
const port = app.get('port');

// app runnning on selected port

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
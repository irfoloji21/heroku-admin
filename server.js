let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/multikart-backend'));

app.get('/*', (req,resp)=>{
    resp.sendFile(__dirname + '/dist/multikart-backend/index.html');
});

app.listen(process.env.PORT || 3000);
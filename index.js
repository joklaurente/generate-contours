const express = require('express');
const app = express();              
const shell = require('shelljs')

app.use(express.static('public'));

app.get('/', (req, res) => {    
    res.sendFile('index.html', {root: __dirname});      
 });

app.listen(8000, () => {            
    console.log(`Now listening on port 8000`);
    shell.exec('./scripts/identifyGround.sh')
    shell.exec('./scripts/generateDEM.sh')
    shell.exec('./scripts/projectDEM.sh')
    shell.exec('./scripts/fillNoData.sh')
    shell.exec('./scripts/generateContours.sh')
    shell.exec('open http://localhost:8000/')
});


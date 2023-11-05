const fs = require('fs');

fs.readFile('./sites/home.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        document.body.innerHTML = data;
    }
})

// callback hell

fs.readFile('f1.txt', function(err, data) { // callback
    if(err) {
        console.log(err);
    }else {
        fs.readFile('f2.txt', function (err, data) {  // callback
            if(err) {
                console.log(err);
            }else {
                console.log('File 2 Data > ', data);
                fs.readFile('f3.txt', function (err, data) {  // callback
                    if(err) {
                        console.log(err);
                    }else {
                        console.log('File 2 Data > ', data);
                        fs.readFile('f4.txt', function (err, data) {  // callback
                            if(err) {
                                console.log(err);
                            }else {
                                console.log('File 2 Data > ', data);
                                fs.readFile('f5.txt', function (err, data) {  // callback
                                    if(err) {
                                        console.log(err);
                                    }else {
                                        console.log('File 2 Data > ', data);
                        
                                        
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        console.log('File 1 Data > ', data);
    }
});


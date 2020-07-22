var jsonConcat = require('json-concat');
jsonConcat(
    {
        src: "mocks/data",
        dest: "mocks/db.json",
    }, function (json) {
        console.log(json);
    }
);
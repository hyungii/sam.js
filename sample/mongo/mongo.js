var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://14.49.37.90:27017/test', function(err, db) {
        if (err) { return console.log(err); }

        console.log('connected.');

        var collection = db.collection('test', function(err, collection) {
            console.log('collection.');
        });
        var doc1 = {'hello':'doc1'};
        var doc2 = {'hello':'doc2'};
        var lotsOfDocs = [{'hello':'doc3'},{'hello':'doc4'}];

        collection.insert(doc1);
        collection.insert(doc2, {w:1}, function(err, result) {});
        collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
});


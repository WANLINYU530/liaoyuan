var MongoClient=require('mongodb').MongoClient;
var dbUrl='mongodb://127.0.0.1:27017/url_shortener';

var newData={ firstName:'John',lastName:'Doe'};

MongoClient.connect(dbUrl,function(err,db){
	if(err) throw err;
	console.log('Successfully connected');

	var collection= db.collection('test');

	collection.insert(newData,function(err,docs){
		console.log('Inserted Count:',docs.insertedCount);
		console.log('Inserted Ids:',docs.insertedIds);
		console.log('Data ID:',newData);
		
	});

	collection.find({}).toArray(function(err,docs){
		console.log(docs);
	});
});
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:PgXKbDKr1SpXRUkv@cluster0.lalsibb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function main() {
    try {
        await client.connect();

        console.log("접속 성공");

        const collection = client.db('test').collection('person');

        await collection.insertOne({ name: "Bravo", age: 26});
        console.log("30세 Andy 추가 완료");

        const documents = await collection.find({name: "Bravo"}).toArray();
        console.log("찾은 문서 : ", documents);

        await collection.updateOne({name: "Bravo"},  { $set: { age: 27 } });
        console.log("31살로 업데이트");

        const updatedDocuments = await collection.find({name: "Bravo"}).toArray();
        console.log("업데이트 된 문서 : ", updatedDocuments);

        // await collection.deleteOne({ name: "Andy" });
        // console.log("Andy 삭제");

        await client.close();
    } catch (e) {
        console.error(e);
    }
}

main();
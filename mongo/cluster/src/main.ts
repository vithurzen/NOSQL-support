import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL!);

await client.connect();

const products = client
  .db("marketplace")
  .collection("products");

const stream = products.watch();

products.insertOne({test: "1"})

stream.on("change", (event) => {
  console.log(event);
});

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL!);

await client.connect();

const commands = client.db("marketplace").collection("commands")

const result = await commands.aggregate([

]).toArray();

console.log(result);

await client.close()
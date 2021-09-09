const path = require("path")
const { Client } = require("pg")
const fs = require("fs")

const indexShema = fs
    .readFileSync(path.resolve(__dirname, "./index.sql"))
    .toString()

const connectionString =
    "postgres://postgres:12345@localhost/base_prueba2"

const client = new Client({ connectionString })
client.connect((err) => {
    if (err) {
        console.log("error al conectar en la base de datros", err)
    }
})

async function main() {
    try {
        const resp = await client.query(indexShema).catch((err) => err)
    } catch (error) {
        console.log("ERROR", error)
        throw new Error("error al inicir sql ", error)
    }
}
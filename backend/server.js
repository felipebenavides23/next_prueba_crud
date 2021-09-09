const express = require("express")
const { postgraphile } = require("postgraphile")

const app = express()

app.use(
    postgraphile(
        process.env.DATABASE_URL || "postgres://postgres:12345@localhost/base_prueba2",
        "public", {

        watchPg: true,
        extendedErrors: ["hint", "detail", "errcode"],
        appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
        graphiql: true,
        enhanceGraphiql: true,
        allowExplain(req) {
            // TODO: customise condition!
            return true;
        },
        enableQueryBatching: true,
        legacyRelations: "omit",
        pgSettings(req) {
            /* TODO */
        },

    }
    )
)

app.listen(process.env.PORT || 5000)
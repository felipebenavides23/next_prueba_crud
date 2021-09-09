npx postgraphile -c 'postgres://postgres:12345@localhost/base_prueba2' --watch --enhance-graphiql --dynamic-json \
 --schema public 
 --append-plugins @graphile-contrib/pg-simplify-inflector 
#  --enhance-graphiql \
 --allow-explain
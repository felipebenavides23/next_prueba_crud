create table auto(
    id serial primary key,
    modelo text not null,
    placa text not null,
    fecha_creacion timestamp default now()
)
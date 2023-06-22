from sqlalchemy import Table, Column, func
from sqlalchemy.sql.sqltypes import Integer, String, DateTime
from config.db import meta, engine

# Definir la tabla "user"
users = Table(
    'user',  # Nombre de la tabla
    meta,  # Objeto MetaData para asociar la tabla con el esquema
    Column("id", Integer, primary_key=True, autoincrement=True),  # Columna 'id' de tipo entero con clave primaria y autoincremento
    Column("name", String(255)),  # Columna 'name' de tipo cadena de longitud máxima 255
    Column("email", String(255)),  # Columna 'email' de tipo cadena de longitud máxima 255
    Column("address", String(255)),  # Columna 'address' de tipo cadena de longitud máxima 255
    Column("phone", String(255)),  # Columna 'phone' de tipo cadena de longitud máxima 255
    Column("created_at", DateTime, default=func.now()),  # Columna 'created_at' de tipo fecha y hora con valor predeterminado de la fecha y hora actual
    Column("updated_at", DateTime, default=func.now(), onupdate=func.now())  # Columna 'updated_at' de tipo fecha y hora con valor predeterminado y actualización automática a la fecha y hora actual
)

# # Crear la tabla en la base de datos
meta.create_all(engine) #Crea la tabla en la base de datos

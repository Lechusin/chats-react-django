import aio_pika

async def connect_rabbitmq(user, password, host):
    connection = await aio_pika.connect_robust(
        "amqp://"+user+":"+password+"@"+host+"/",  # URL de conexión de RabbitMQ
    )
    return connection
""" from sqlalchemy import create_engine
from sqlalchemy import MetaData
from sqlalchemy import DDL
from sqlalchemy.orm import sessionmaker

# Crear el motor de SQLAlchemy
engine = create_engine("mysql+pymysql://root:@localhost:3306/?charset=utf8", echo=True)

# Establecer el nombre de la base de datos en la URL de conexión
with engine.connect() as conn:
    create_database = DDL("CREATE DATABASE IF NOT EXISTS fastapi")    # DDL es un lenguaje de definicion de datos
    conn.execute(create_database)  # Ejecuta la sentencia de arriba
    engine = create_engine("mysql+pymysql://root@localhost:3306/fastapi?charset=utf8", echo=True)

# Crear la instancia de la sesión de SQLAlchemy
SessionLocal = sessionmaker(autocommit=False, autoflush=True, bind=engine)

# Crear una nueva sesión
conn = SessionLocal()  # Se encarga de las transacciones de la base de datos

# Crear una instancia de MetaData
meta = MetaData()  # Se encarga de las transacciones de la base de datos


 """
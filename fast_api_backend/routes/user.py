from config.db import create_rabbitmq_user
from fastapi import APIRouter
# from config.db import conn
# from models.user import users
# from schemas.user import UserCreate, UserUpdate,UserGet
#from sqlalchemy.exc import SQLAlchemyError
# from fastapi.responses import JSONResponse

user = APIRouter()


@user.get("/", tags=["Inicio"])
def read_root():
    return {"message": "Bienvenido a Backend FastAPI + RabbitMQ"}

@user.post("/users")
async def create_user(username: str, password: str, host: str):
    # Crea el usuario en RabbitMQ
    await create_rabbitmq_user(username, password, host)
    return {"message": "Usuario creado exitosamente"}

""" # Obtener todos los usuarios
@user.get("/user", response_model=list[UserGet], tags=["Usuarios"])
def get_users():
    try:
        # Ejecutar la consulta SQL y obtener los resultados
        results = conn.execute(users.select()).fetchall()
        # Crear una lista de instancias de UserBase a partir de los resultados
        user_list = [UserGet(id=row[0], name=row[1], email=row[2], address=row[3], phone=row[4]) for row in results]
        return user_list
    except Exception as e:
        # Devuelve un error en formato JSON
        return JSONResponse(content={"error": str(e)})

# Crear un nuevo usuario
@user.post("/user", response_model=UserCreate, tags=["Usuarios"])
def create_user(user: UserCreate):
    new_user = {"name": user.name, "email": user.email, "address": user.address, "phone": user.phone}
    try:
        # Insertar el nuevo usuario en la base de datos
        result = conn.execute(users.insert().values(new_user))
        conn.commit()  # Confirmar la transacción
        return new_user
    except Exception as e:
        # Devuelve un error en formato JSON
        return {"message": "Se ha producido un error durante la creación del usuario."}

# Obtener un usuario por su ID
@user.get("/user/{user_id}", response_model=UserGet, tags=["Usuarios"])
def get_user(user_id: int):
    result_proxy = conn.execute(users.select().where(users.c.id == user_id))
    result = result_proxy.first()
    if result is not None:
        column_names = result_proxy.keys()
        user_dict = {column: result[i] for i, column in enumerate(column_names)}
        user = UserGet(**user_dict)
        return user
    else:
        return {"message": "Usuario no encontrado"}

# # Eliminar un usuario por su ID
@user.delete("/user/{user_id}", tags=["Usuarios"])
def delete_user(user_id: int):
    try:
        if conn.execute(users.select().where(users.c.id == user_id)).first() is None:
            return {"message": "Usuario no encontrado."}
        conn.execute(users.delete().where(users.c.id == user_id))
        conn.commit()
        return {"message": "Usuario eliminado correctamente."}
    except SQLAlchemyError as e:
        return {"message": "Se ha producido un error durante la eliminación del usuario."}

# Actualizar un usuario por su ID
@user.put("/user/{user_id}", tags=["Usuarios"])
def update_user(user_id: int, user: UserUpdate):
    try:
        if conn.execute(users.select().where(users.c.id == user_id)).first() is None:
            return {"message": "Usuario no encontrado."}
        conn.execute(users.update().where(users.c.id == user_id).values(
            name=user.name, email=user.email, address=user.address, phone=user.phone))
        conn.commit()
        return {"message": "Usuario actualizado correctamente."}
    except SQLAlchemyError as e:
        return {"message": "Se ha producido un error durante la actualización del usuario."}
 """
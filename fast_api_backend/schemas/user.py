from pydantic import BaseModel #Libreria para validar los datos de entrada

class UserBase(BaseModel):
    """
    Modelo base que define la estructura de un usuario.
    """
    name: str
    email: str
    address: str
    phone: str


class UserCreate(UserBase):
    """
    Modelo de datos para la creación de un usuario.
    Hereda todos los campos de UserBase.
    No agrega campos adicionales.
    """
    pass


class UserUpdate(UserBase):
    """
    Modelo de datos para la actualización de un usuario.
    Hereda todos los campos de UserBase.
    No agrega campos adicionales.
    """
    pass

class UserGet(UserBase):
    id:int
    pass




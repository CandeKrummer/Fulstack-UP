# TP FullStack

## Cómo instalarlo

- Clonar el respositorio
- Abrir la consola y ejecutar ```npm install```
- Configurar las variables locales en un .env
- Lanzar el servidor con ```npm index.js```


## Login

**Metodo POST**

```auth/login```

En el body:
```
{
    "nombre" : "prueba"
    "pin" : "1234"
}
```

El login devuelve un token que se deberá utilizar para acceder a algunos métodos de la API. 
Recomiendo copiar este token y pegarlo en la parte de "Authorization" de postman, seleccionando "Bearer Token" como type y luego pegando el token sin las comillas.

## Metodos GET

**A todos los metodos GET que devuelven un array de datos se les puede enviar los parametros ```limit``` y ```offset``` a través de la query para manejar cómo llegan los datos.**

```/usuarios``` **Requiere Token**
- Devuelve la lista de usuarios
___________________________________________________________
```/usuarioById/```
- Devuelve el objeto usuario a partir de la Id enviada por parámetro
___________________________________________________________
```/personajes```
- Devuelve los personajes disponibles para jugar
___________________________________________________________
```/ropaByTipo/```
- Devuelve la ropa disponible según el tipo enviado por parámetro. Los tipos de ropa son "torso", "piernas" y "pies".
___________________________________________________________
```/ropa```
- Devuelve toda la ropa disponible
___________________________________________________________
```/personajesVestidos```
- Devuelve todos los personajes que tengan un autfit armado
___________________________________________________________
```/personajesVestidosByIdUsuario/```
- Devuelve los personajes que tengan un outfit armado por el usuario al cual corresponde la Id que se envía por parámetro
___________________________________________________________
```/ultimos5PersonajesVestidos```
- Devuelve los últimos 5 outfits que se armaron en todo el juego
___________________________________________________________

## Método POST

```/personajeVestido``` **Requiere Token**

Se debe enviar por el body un objeto con el siguiente formato:
```
{
    "nombreVestuario" : "The Eras Tour",
    "personaje" : {
        "nombre": "Taylor Swift",
        "imagen": "/taylorSwift.jpg",
        "descripcion": "La Industria Musical",
        "createdAt": "2023-09-25T06:00:12.769Z",
        "updatedAt": "2023-09-25T06:00:12.769Z",
        "__v": 0,
        "id": "651121ecb3dc1151751f8cd5"
    },
    "torso" : {
        "nombre": "remera1",
        "imagen": "/remera1.jpg",
        "tipo": "torso",
        "descripcion": "",
        "createdAt": "2023-09-25T06:04:23.791Z",
        "updatedAt": "2023-09-25T06:04:23.791Z",
        "__v": 0,
        "id": "651122e7b3dc1151751f8ce0"
    },
    "piernas" : {
        "nombre": "pantalones1",
        "imagen": "/pantalones1.jpg",
        "tipo": "piernas",
        "descripcion": "",
        "createdAt": "2023-09-25T06:05:11.730Z",
        "updatedAt": "2023-09-25T06:05:11.730Z",
        "__v": 0,
        "id": "65112317b3dc1151751f8ce8"
    },
    "pies" : {
        "nombre": "zapatos1",
        "imagen": "/zapatos1.jpg",
        "tipo": "pies",
        "descripcion": "",
        "createdAt": "2023-09-25T06:06:07.396Z",
        "updatedAt": "2023-09-25T06:06:07.396Z",
        "__v": 0,
        "id": "6511234fb3dc1151751f8cf0"
    },
    "idUsuario" : "6511217c06f6ffaeee607204"
}
```


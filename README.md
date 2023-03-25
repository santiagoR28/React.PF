<style>
.titulos {
    color: #3c0707;
    font-weight:700;
    font-size: 30px;
}
</style>

# Acerca de este proyecto {#identifier .titulos}

Este es un ecommerce hecho con React.JS por un estudiante de CoderHouse.

Consume principalmnte la **Fake Store API** para el catalogo de productos y sus diferentes categorias.

Tambien consume la herramienta de Google **Firebase** usada como base de datos NoSQL para almacenar los diferentes productos (obtenidos de la API antes mencionada) y datos de las compras realizadas.

# Flujo y componentes {#identifier .titulos}

- Navbar.js e hijos de esta (encontrados en src/components/Navbar): éstos componentes se encargan de renderizar el Navbar y de permitirle un fácil manejo al usuario entre las distintas categorias y rutas de la web.

- ItemListContainer.js e hijos de esta (encontrados en src/components/Item) : éstos componentes se encargan principalmente de renderizar los diferentes productos y filtrarlos por categorias .

- ItemDetailContainer.js e hijos de esta (encontrados en src/components/ItemDetail): éstos componentes se encargan principalmente de renderizar una vista mas detallada de cada producto asi como el stock existente y darle la opción al usuario de seleccionar la cantidad de unidades que desea llevar, las cuales luego seran importadas al carrito.

- Cart.js y CartContext.js (encontrados en src/components/cart y src/components/context respectivamente): éstos componentes se encargan de renderizar la vista de los productos que el usuario ha ido seleccionando y de darle la opcion al usuario de eliminar productos o de proseguir con la compra.

- Sell.js y SellConsult.js (encontrados en src/components/sell): éstos componentes le dan la opción al usuario de concretar la compra y verificar el estado de la misma por medido de la creacion de un ID de compra único. Al concretar la compra los datos del usuario (ingresados por medio de un formulario) son importados a la base de datos.

- WishList.js y WishListContext.js (encontrados en src/components/WishList y src/components/context respectivamente): éstos componentes se encargan de renderizar una WishList que estará a disposición en todo momento

# Herramientas Utilizadas {#identifier .titulos}

- React.js.
- Fake Store API (https://fakestoreapi.com/) para los diferentes productos.
- Firebase (https://firebase.google.com/) como base de datos NoSQL.
- React Router Dom (https://reactrouter.com/en/main) para el manejo de rutas.
- Google Fonts (https://fonts.google.com/) para el styling de ciertos textos.

# ¿Cómo lo reproduzco? {#identifier .titulos}

- Clona el repositorio
- Desde la terminal, situado en la carpeta del proyecto ejecutar el comando **npm i**
- Luego, utiliza el comando: **npm start**
  Listo!, ya puedes probar el proyecto

##### Thanks for README:)

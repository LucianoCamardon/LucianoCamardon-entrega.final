# React + Vite

Un e-Commerce de Joyeria, realizado con Firebase, Tailwind y React-Dom.

En "Inicio" hay unicamente un saludo, en "Productos" se encuentran todos los productos, y luego hay distintas categorias en las que se separan. Clickeando una tarjeta se va al detalle del producto donde se puede agregar al carro, y desde esa vista acceder al carro.
Desde el carro se pueden sumar productos o quitarlos, e ir a pagar, que te lleva a un formulario donde te pide una direccion de entrega.

En el archivo .env puse la apikey de mi firebase pero no lo cambien en "firebaseconfig.js" ni lo puse en el "gitignore", solo lo coloque para que exista el archivo.

IMPORTANTE: Para que funcione el proyecto es necesario instalar las dependencias de tailwind con los siguientes comandos:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
De otra manera no funcionará.


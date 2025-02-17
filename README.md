Esta es una aplicación que permite obtener detalles del clima ingresando el nombre de la ciudad de interes.

Fue desarrollada en Reactjs haciendo uso de herramientas básicas como estados (tanto "locales" como "globales") a través 
de hooks como useState, useEffect, useContext, tambien se aplicaron metodos de navegacion para páginas SPA con React Router DOM.
Para la parte visual (los estilos) se uso bootstrap, lo cual facilita el diseño responsivo de la página. Para obtener los datos 
del clima se hace mediante el consumo de la API de https://www.weatherapi.com/ 

La aplicacion consiste en dos pestañas en el menú de navegación. 

Una de ellas lleva al inicio de la aplicación y desde alli se puede ver el resultado de la busqueda de la ciudad de interes. esta pestaña contiene un mensaje de bienvenida y proporciona indicaciones básicas que debe seguir el usuario para generar la búsqueda. 
Para ingresar la ciudad se proporciona un campo de texto y un botón. Para iniciar la búsqueda el usuario puede dar "enter" despues de escribir la ciudad u oprimir el botón. El resultado de busqueda puede ser la información del clima de la ciudad escrita o un mensaje de error, indicando que la ciudad no fue hallada. Si se genera la información del clima, se genera tambíen un botón que permite agregar a una lista de ciudades "preferidas".

La segunda pestaña, es la lista de ciudades "preferidas" que el usuario haya ingresado. en esta pestaña si no se ha agregado aun una ciudad se genera mensaje de "Aún no hay ciudades para ver". Si ya ha agregado ciudades se mostrarán éstas con el nombre y un botón para ver el clima de dicha ciudad. Si se desea buscar otra ciudad y la persona esta en la pestaña de preferidas, entonces se dispone de un campo de texto y botón de búsqueda en la parte superior de la página.


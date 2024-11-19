CREATE DATABASE Yokohama;
USE Yokohama;

CREATE TABLE clientes (
id_clientes INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) UNIQUE NOT NULL,
senha VARCHAR(100) NOT NULL
);

CREATE TABLE pagamentos (
tipo_pagamento VARCHAR(100), 
id_pagamentos INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE reservas (
id_reservas INT AUTO_INCREMENT PRIMARY KEY, 
restaurantes VARCHAR(20),
data DATE NOT NULL,
hora TIME NOT NULL
);

CREATE TABLE pedidos ( 
id_pedidos INT AUTO_INCREMENT PRIMARY KEY, 
id_clientes INT,
id_pagamentos INT, 
id_reservas INT,
FOREIGN KEY (id_clientes) REFERENCES clientes(id_clientes),
FOREIGN KEY (id_pagamentos) REFERENCES pagamentos(id_pagamentos),
FOREIGN KEY (id_reservas) REFERENCES reservas(id_reservas)
); 

select * from clientes




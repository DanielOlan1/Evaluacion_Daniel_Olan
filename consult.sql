CREATE TABLE libros (
  libro_id INT PRIMARY KEY,
  titulo VARCHAR(255),
  autor VARCHAR(255)
);


CREATE TABLE alumnos (
  alumno_id INT PRIMARY KEY,
  nombre VARCHAR(255)
);


CREATE TABLE prestamos (
  prestamo_id INT PRIMARY KEY,
  libro_id INT,
  alumno_id INT,
  fecha_prestamo DATE,
  fecha_devolucion DATE,
  FOREIGN KEY (libro_id) REFERENCES libros(libro_id),
  FOREIGN KEY (alumno_id) REFERENCES alumnos(alumno_id)
);

SELECT libros.titulo
FROM libros
JOIN prestamos ON libros.libro_id = prestamos.libro_id
JOIN alumnos ON prestamos.alumno_id = alumnos.alumno_id
WHERE alumnos.nombre = 'Sonia'
  AND prestamos.fecha_devolucion IS NULL
  AND prestamos.fecha_prestamo < '2021-07-30';



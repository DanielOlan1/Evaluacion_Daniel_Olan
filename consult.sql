-- De las siguientes tablas, generar una consulta sql que identifique el(los) libros que al día de hoy 30/07/2021, el alumno de nombre Sonia tiene prestado(s), que no ha regresado y su préstamo esta vencido.

-- Definición de la tabla "libros"
CREATE TABLE libros (
  libro_id INT PRIMARY KEY,     -- Identificador único del libro
  titulo VARCHAR(255),          -- Título del libro
  autor VARCHAR(255)            -- Autor del libro
);

-- Definición de la tabla "alumnos"
CREATE TABLE alumnos (
  alumno_id INT PRIMARY KEY,     -- Identificador único del alumno
  nombre VARCHAR(255)           -- Nombre del alumno
);

-- Definición de la tabla "prestamos"
CREATE TABLE prestamos (
  prestamo_id INT PRIMARY KEY,   -- Identificador único del préstamo
  libro_id INT,                 -- Identificador del libro prestado
  alumno_id INT,                -- Identificador del alumno que realiza el préstamo
  fecha_prestamo DATE,          -- Fecha en que se realiza el préstamo
  fecha_devolucion DATE,        -- Fecha esperada de devolución
  FOREIGN KEY (libro_id) REFERENCES libros(libro_id),    -- Clave foránea referenciando la tabla libros
  FOREIGN KEY (alumno_id) REFERENCES alumnos(alumno_id) -- Clave foránea referenciando la tabla alumnos
);

-- Consulta para identificar los libros prestados al alumno "Sonia"
SELECT libros.titulo
FROM libros
JOIN prestamos ON libros.libro_id = prestamos.libro_id
JOIN alumnos ON prestamos.alumno_id = alumnos.alumno_id
WHERE alumnos.nombre = 'Sonia'
  AND prestamos.fecha_devolucion IS NULL
  AND prestamos.fecha_prestamo < '2021-07-30';


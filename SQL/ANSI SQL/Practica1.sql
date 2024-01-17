--	Seleccionar el apellido, oficio, salario, numero de departamento y su nombre de todos los empleados cuyo salario sea mayor de 300000
SELECT E.APELLIDO, E.OFICIO, SALARIO, D.DEPT_NO, D.DNOMBRE
FROM EMP E
INNER JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
WHERE SALARIO > 300000;

--	Mostrar todos los nombres de Hospital con sus nombres de salas correspondientes
SELECT S.NOMBRE AS SALA_NOMBRE, H.NOMBRE AS HOSP_NOMBRE
FROM HOSPITAL H
INNER JOIN SALA S
ON H.HOSPITAL_COD = S.HOSPITAL_COD;

--	Calcular cuantos trabajadores de la empresa hay en cada ciudad
SELECT D.LOC, COUNT(E.APELLIDO) AS TRABAJADORES
FROM EMP E
RIGHT JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
GROUP BY D.LOC;

--	Visualizar cuantas personas realizan cada oficio en cada departamento mostrando el nombre del departamento
SELECT D.DNOMBRE, E.OFICIO, COUNT(E.APELLIDO) AS TRABAJADORES
FROM EMP E
RIGHT JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
GROUP BY D.DNOMBRE, E.OFICIO;

--	Contar cuantas salas hay en cada hospital, mostrando el nombre de las salas y el nombre del hospital
SELECT COUNT(S.SALA_COD), S.NOMBRE AS SALA_NOMBRE, H.NOMBRE AS HOSP_NOMBRE
FROM SALA S
INNER JOIN HOSPITAL H
ON S.HOSPITAL_COD = H.HOSPITAL_COD
GROUP BY S.NOMBRE, H.NOMBRE;

--	Buscar aquellas ciudades con cuatro o más personas trabajando
SELECT D.LOC AS LOCALIDAD, COUNT(E.EMP_NO) AS NUM_PERSONAS
FROM EMP E
RIGHT JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
GROUP BY D.LOC
HAVING COUNT(E.EMP_NO) >= 4;

--	Calcular el valor medio de las camas que existen para cada nombre de sala. Indicar el nombre de cada sala y el código de cada una de ellas
SELECT SALA.NOMBRE, SALA.SALA_COD, AVG(SALA.NUM_CAMA) AS MEDIA_CAMAS
FROM SALA
GROUP BY SALA.NOMBRE, SALA.SALA_COD;

--	Mostrar los doctores junto con el nombre de hospital en el que ejercen, la dirección y el teléfono del mismo
SELECT D.APELLIDO, H.NOMBRE, H.DIRECCION, H.TELEFONO
FROM DOCTOR D
INNER JOIN HOSPITAL H
ON D.HOSPITAL_COD = H.HOSPITAL_COD;

--	Visualizar el Apellido de los empleados de la plantilla junto con el nombre de la sala, el nombre del hospital y el número de camas libres de cada una de ellas
SELECT P.APELLIDO, S.NOMBRE AS SALA, H.NOMBRE AS HOSPITAL, S.NUM_CAMA AS CAMAS
FROM PLANTILLA P
INNER JOIN HOSPITAL H
ON P.HOSPITAL_COD = H.HOSPITAL_COD
INNER JOIN SALA S
ON P.SALA_COD = S.SALA_COD
AND S.HOSPITAL_COD = H.HOSPITAL_COD;
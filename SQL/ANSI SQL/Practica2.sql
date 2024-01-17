--	Seleccionar el apellido, oficio, salario, numero de departamento y su nombre de todos los empleados cuyo salario sea mayor de 300000
SELECT E.APELLIDO, E.OFICIO, E.SALARIO, E.DEPT_NO, D.DNOMBRE
FROM EMP E
INNER JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
WHERE E.SALARIO > 300000;

--	Mostrar todos los nombres de Hospital con sus nombres de salas correspondientes
SELECT S.NOMBRE AS SALA_NOMBRE, H.NOMBRE AS HOSP_NOMBRE
FROM SALA S
INNER JOIN HOSPITAL H
ON S.HOSPITAL_COD = H.HOSPITAL_COD;

--	Buscar aquellas ciudades con cuatro o más personas trabajando+
SELECT D.LOC, COUNT(E.EMP_NO) AS TRABAJADORES
FROM EMP E
INNER JOIN DEPT D
ON E.DEPT_NO = D.DEPT_NO
GROUP BY D.LOC
HAVING COUNT(E.EMP_NO) >= 4;

--	Mostrar los doctores junto con el nombre de hospital en el que ejercen, la dirección y el teléfono del mismo
SELECT D.APELLIDO, H.NOMBRE AS HOSP_NOMBRE, H.DIRECCION, H.TELEFONO
FROM DOCTOR D
INNER JOIN HOSPITAL H
ON D.HOSPITAL_COD = H.HOSPITAL_COD;

--	Se quiere dar de alta un departamento de RRHH situado en Soria y otro departamento de Informática en Alicante
INSERT INTO DEPT VALUES ((SELECT MAX(DEPT_NO) + 1 FROM DEPT), 'RRHH', 'SORIA');
INSERT INTO DEPT VALUES ((SELECT MAX(DEPT_NO) + 1 FROM DEPT), 'INFORMÁTICA', 'ALICANTE');

--	El departamento de Ventas por motivos de peseteros se traslada a Tabarnia, realizar dicha modificación
UPDATE DEPT
SET LOC = 'TABARNIA'
WHERE DNOMBRE = 'VENTAS';

--	En el departamento anterior (VENTAS) se dan de alta dos empleados: Julián Romeral y Luis Campayo.  Su salario base es de 80000 Pts. y cobrarán una comisión del 15% de su salario
INSERT INTO EMP (EMP_NO,APELLIDO,OFICIO,SALARIO,COMISION,DEPT_NO)
VALUES((SELECT MAX(EMP_NO) FROM EMP), 'ROMERAL', 'EMPLEADO',
80000, 80000*0.15,(SELECT DEPT_NO FROM DEPT WHERE DNOMBRE = 'VENTAS'))
INSERT INTO EMP (EMP_NO,APELLIDO,OFICIO,SALARIO,COMISION,DEPT_NO)
VALUES((SELECT MAX(EMP_NO) FROM EMP), 'CAMPAYO', 'EMPLEADO',
80000, 80000*0.15,(SELECT DEPT_NO FROM DEPT WHERE DNOMBRE = 'VENTAS'))

--	Modificar la comisión de los empleados de la empresa, de forma que todos tengan un incremento del 10% del salario
UPDATE EMP
SET COMISION = SALARIO * 0.10;

--	Incrementar en 10000 el salario de los interinos de la plantilla que trabajen en el turno de noche
UPDATE PLANTILLA
SET SALARIO = 10000
WHERE FUNCION = 'Interino'
AND T = 'N';

--	Ha llegado un nuevo doctor a la Paz.  Su apellido es House y su especialidad es Diagnostico.   Introducir el siguiente número de doctor disponible
INSERT INTO DOCTOR(HOSPITAL_COD, DOCTOR_NO, APELLIDO, ESPECIALIDAD)
VALUES((SELECT HOSPITAL_COD FROM HOSPITAL WHERE NOMBRE = 'La Paz'),
(SELECT MAX(DEPT_NO) + 1 FROM DEPT),
'House', 'Diagnóstico');

--	Incrementar el salario de los empleados del departamento de ventas de modo que cobren 5000 más que el empleado que menos cobre con oficio EMPLEADO
UPDATE EMP
SET SALARIO = 5000 + (SELECT MIN(SALARIO) FROM EMP WHERE OFICIO = 'EMPLEADO')
WHERE DEPT_NO = (SELECT DEPT_NO FROM DEPT WHERE DNOMBRE = 'VENTAS');

--	Borrar los empleados cuyo nombre de departamento sea I+D
DELETE FROM EMP
WHERE DEPT_NO = (SELECT DEPT_NO FROM DEPT WHERE DNOMBRE = 'I+D');
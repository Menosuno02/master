/*
-- VISTAS
--	Ejemplo de vista sin salario y comision de empleados
CREATE VIEW V_EMPLE_SIMPLE
AS
	SELECT EMP_NO, APELLIDO, OFICIO, DIR, FECHA_ALT, DEPT_NO
	FROM EMP
GO

SELECT *
FROM V_EMPLE_SIMPLE

--	La vista no contiene datos, es una capa para la tabla
INSERT INTO V_EMPLE_SIMPLE
VALUES(1112, 'Vista', 'EMPLEADO', 7902, GETDATE(), 10)

UPDATE V_EMPLE_SIMPLE
SET OFICIO = 'OTRO'
WHERE EMP_NO = 1112

DELETE FROM V_EMPLE_SIMPLE
WHERE EMP_NO = 1112

--	Creamos una vista con JOIN para simplificar consultas
CREATE VIEW V_EMPLEADOS_DEPARTAMENTOS
AS
	SELECT EMP.EMP_NO, EMP.APELLIDO, EMP.OFICIO, EMP.SALARIO, EMP.COMISION, DEPT.DNOMBRE, DEPT.LOC, DEPT.DEPT_NO
	FROM EMP INNER JOIN DEPT
	ON EMP.DEPT_NO = DEPT.DEPT_NO
GO

SELECT *
FROM V_EMPLEADOS_DEPARTAMENTOS
WHERE LOC = 'ELCHE'

--	Modificar el salario de los empleados de Madrid
UPDATE V_EMPLEADOS_DEPARTAMENTOS
SET SALARIO = SALARIO + 1
WHERE LOC = 'MADRID'

--	Modificar el nombre del departamento de los empleados de Madrid
UPDATE V_EMPLEADOS_DEPARTAMENTOS
SET DNOMBRE = 'MIÉRCOLES'
WHERE LOC = 'MADRID'

--	Modificar el nombre del departamento y el salario de los emples de Madrid
--	Si la consulta afecta a campos de varias tablas, no podemos hacerla
UPDATE V_EMPLEADOS_DEPARTAMENTOS
SET DNOMBRE = 'CONTABILIDAD', SALARIO = SALARIO + 1
WHERE LOC = 'MADRID'

--	Eliminar a los empleados de Madrid
--	Al no marcarle que tabla (hay un JOIN), no sabe que borrar. Ambas consultas dan error
DELETE FROM V_EMPLEADOS_DEPARTAMENTOS
WHERE LOC = 'MADRID'
DELETE FROM V_EMPLEADOS_DEPARTAMENTOS
WHERE EMP_NO = 1112




-- PROCEDIMIENTOS ALMACENADOS
CREATE PROCEDURE SP_BUSCADOR_EMP_SALARIO
(@salario INT)
AS
	SELECT *
	FROM EMP
	WHERE SALARIO >= @salario
GO

EXECUTE SP_BUSCADOR_EMP_SALARIO 200000;

--	Procedimiento para insertar un departamento
--	En los tipos de dato texto, debemos poner la longitud
CREATE OR ALTER PROCEDURE SP_INSERT_DEPT
(@dept_no INT, @nom NVARCHAR(50), @loc NVARCHAR(50))
AS
	INSERT INTO DEPT
	VALUES(@dept_no, @nom, @loc)
GO

EXECUTE SP_INSERT_DEPT 81, 'STORED', 'PROCEDURE'
SELECT * FROM DEPT
*/




-- TRANSACT SQL
DECLARE @numero INT
DECLARE @texto NVARCHAR(50)
DECLARE @fecha DATETIME

--	Asignamos valores estáticos
SET @numero = 14
SET @texto = 'Hoy es miércoles'
--	Valores mediante funciones
SET @fecha = GETDATE() -- fecha de hoy

--	Representar valores
--	 1) Consultas SELECT, hacer un SELECT con las variables y recuperarlo en cualquier APP
SELECT @numero AS NUMERO, @texto AS TEXTO, @fecha AS FECHA

--	 2) PRINT, propio de SQL Server. Muestra mensajes a nivel de servidor, que solamente sirven para la BBDD
--		Se utilizan como buena praxis de desarrollo en BBDD para seguir la secuencia de ejecución
--		Aparecen en la ventana messages
--		Debemos hacer casting de los tipos de datos -> CAST(@variable AS type)
PRINT @texto + ' con número ' + CAST(@numero AS NVARCHAR) + ' y fecha ' + CAST(@fecha AS NVARCHAR)


--	Recuperar valores de variables a partir de un SELECT
--	Mostrar datos del empleado más antiguo de la empresa
SELECT *
FROM EMP
WHERE FECHA_ALT = (SELECT MIN(FECHA_ALT)
				   FROM EMP);

-- Para no usar subconsulta, almacenamos la fecha en una variable y hacemos SELECT simple
DECLARE @fechaalt DATETIME
SELECT @fechaalt = MIN(FECHA_ALT) FROM EMP
SELECT *
FROM EMP
WHERE FECHA_ALT = @fechaalt

--	No podemos combinar consulta SELECT para almacenar con SELECT para mostrar
--	SELECT @fechaalt = MIN(FECHA_ALT), APELLIDO FROM EMP



--	Condicionales
--	Nos permiten ejecutar múltiples códigos o consultas a partir de parámetros
--	Misma sintaxis que un WHERE. Usamos IN, =, <>, OR, AND
DECLARE @numero INT
SET @numero = -5
IF (@numero > 0)
BEGIN
	PRINT 'POSITIVO'
END
ELSE IF (@numero < 0)
BEGIN
	PRINT 'NEGATIVO'
END 
ELSE
BEGIN
	PRINT 'CERO'
END

--	Mostrar empleados de dept VENTAS. Si existe, mostramos empleados. Si no mostramos mensaje
DECLARE @deptno INT
SELECT @deptno = DEPT_NO FROM DEPT WHERE DNOMBRE = 'VENTAS'
IF (@deptno IS NULL)
BEGIN
	PRINT 'NO EXISTE DEPT DE VENTAS'
END
ELSE
BEGIN
	SELECT *
	FROM EMP
	WHERE DEPT_NO = @deptno
END

--	Modificar salario de empleado por su apellido (SANCHA)
--	Si cobra menos de 150.000 subimos sueldo
--	Si cobra más de 250.000 bajamos sueldo
DECLARE @sueldo INT
SELECT @sueldo = SALARIO
FROM EMP
WHERE APELLIDO = 'SANCHA'
IF (@sueldo < 150000)
BEGIN
	UPDATE EMP
	SET SALARIO = SALARIO + 5000
	WHERE APELLIDO = 'SANCHA'
	PRINT 'SUBIMOS SALARIO (' + CAST(@sueldo AS NVARCHAR) + ')'
END
ELSE IF (@sueldo > 250000)
BEGIN
	UPDATE EMP
	SET SALARIO = SALARIO - 5000
	WHERE APELLIDO = 'SANCHA'
	PRINT 'BAJAMOS SALARIO (' + CAST(@sueldo AS NVARCHAR) + ')'
END
ELSE
BEGIN
	PRINT 'NO HACEMOS NADA ('+ CAST(@sueldo AS NVARCHAR) + ')'
END

--	Modificar el salario de los empleados de la plantilla de La Paz
--	Si la suma salarial supera el millón, bajamos sus salarios a 10.000
--	De lo contrario, subimos sus sueldos a 10.000
ALTER TABLE PLANTILLA ALTER COLUMN SALARIO INT
DECLARE @sumsalarial INT
DECLARE @codhospital INT
SELECT @codhospital = HOSPITAL_COD
FROM HOSPITAL
WHERE NOMBRE = 'La Paz'
SELECT @sumsalarial = SUM(SALARIO)
FROM PLANTILLA
WHERE HOSPITAL_COD = @codhospital
IF (@sumsalarial > 1000000)
BEGIN
	UPDATE PLANTILLA
	SET SALARIO = SALARIO - 10000
	WHERE HOSPITAL_COD = @codhospital
	PRINT 'Salarios de la Paz bajados (suma = ' + CAST(@sumsalarial AS NVARCHAR) + ')'
END
ELSE
BEGIN
	UPDATE PLANTILLA
	SET SALARIO = SALARIO + 10000
	WHERE HOSPITAL_COD = @codhospital
	PRINT 'Salarios de la Paz subidos (suma = ' + CAST(@sumsalarial AS NVARCHAR) + ')'
END



--	Bucles
--	Los bucles no se llevan bien con ninguna BBDD
--	No suele ser una herramienta funcional aunque se puedan hacer
--	Excepto el uso de bucles en cursores
DECLARE @contador INT
SET @contador = 1
WHILE(@contador <= 10)
BEGIN
	PRINT 'CONTADOR: ' + CAST(@contador AS NVARCHAR)
	SET @contador = @contador + 1
END

--	Se usan para recorrer conjuntos de registros en Transact SQL
DECLARE @ape NVARCHAR(40)
SELECT @ape = APELLIDO
FROM EMP
PRINT @ape -- Almacena el último registro de la consulta


--	Existe una variable llamada cursor que permite recorrer y acceder a cada registro de una consulta
DECLARE @apellido NVARCHAR(40)
DECLARE @oficio NVARCHAR(50)

--	 1) Declarar cursor con la consulta a realizar. Las variables de tipo cursor no llevan @
DECLARE QUERY CURSOR FOR
SELECT APELLIDO, OFICIO
FROM EMP

--	 2) Abrir cursor
OPEN QUERY

--	 3) Lectura de una fila con FETCH para cambiar el estado de la variable @@FETCH_STATUS
FETCH NEXT FROM QUERY INTO @apellido, @oficio

--	Ya estamos posicionados en la primera fila. Si  @@FETCH_STATUS ES 0, tenemos filas todavía
--	 4) Recorrer cursor
WHILE (@@FETCH_STATUS = 0)
BEGIN
	PRINT @apellido + ' - ' + @OFICIO
	FETCH NEXT FROM QUERY INTO @apellido, @oficio -- Debemos indicar que siga leyendo con fetch
END

--	 5) Cerrar cursor
CLOSE QUERY

--	6) Liberar la memoria
DEALLOCATE QUERY


--	Necesitamos incrementar el salario de los doctores con un valor aleatorio de hasta 10.000
--	RAND() * 10000
ALTER TABLE DOCTOR ALTER COLUMN SALARIO INT
DECLARE @incremento INT
DECLARE @doctor_no INT
DECLARE @apellido NVARCHAR(50)
DECLARE @salario INT
DECLARE CONSULTA CURSOR FOR
	SELECT DOCTOR_NO, APELLIDO, SALARIO
	FROM DOCTOR
OPEN CONSULTA
FETCH NEXT FROM CONSULTA INTO @doctor_no, @apellido, @salario
WHILE (@@FETCH_STATUS = 0)
BEGIN
	SET @incremento = RAND() * 10000
	SET @salario = @salario + @incremento
	UPDATE DOCTOR
	SET SALARIO = @salario
	WHERE DOCTOR_NO = @doctor_no
	PRINT 'DOCTOR ' + CAST(@apellido AS NVARCHAR) + ' CON NUEVO SALARIO ' + 
		CAST(@salario AS NVARCHAR) + ', INCREMENTO: ' + CAST(@incremento AS NVARCHAR)
	FETCH NEXT FROM CONSULTA INTO @doctor_no, @apellido, @salario
END
CLOSE CONSULTA
DEALLOCATE CONSULTA
SELECT * FROM DOCTOR






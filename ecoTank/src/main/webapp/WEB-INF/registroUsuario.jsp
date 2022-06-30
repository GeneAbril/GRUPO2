<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Registrar usuario</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

</head>
<body>
	<div class="p-3 mb-2 bg-primary text-white">
		<!--  en caso de que exita un error enviamos parametro msgError con el texto -->
		<c:if test="${msgError!= null }">
			<c:out value="${msgError }"></c:out>
		</c:if>
		
		<form:form action="/usuario/guardar" method="post"
			modelAttribute="usuario" autocomplete="off">
			<form:label path="nombre" class="form-label">Nombre:</form:label>
			<form:input path="nombre" class="form-control" />
			<br>
			<form:label path="apellido" class="form-label">Apellido:</form:label>
			<form:input path="apellido" class="form-control" />
			<br>
			<form:label path="correo" class="form-label">Correo:</form:label>
			<form:input path="correo" class="form-control" />
			<br>
			<form:label path="clave" class="form-label">Contraseña:</form:label>
			<form:input path="clave" class="form-control" type="password"/>
			<br>
			<input type="submit" value="Registrar" class="btn btn-primary">
			
		</form:form>
	</div>
</body>
</html>
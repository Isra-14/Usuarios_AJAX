<?php

error_reporting(0); //! Deshabilitar toda notificación de errores
header ('Content-type: application/json; charset=utf-8');

$conexion = new mysqli("localhost", "root", "", "ajax_usuarios");

if($conexion->connect_errno){
  $respuesta = [
    'error' => true
  ];
} else {
  $conexion->set_charset("utf8");

  $statement = $conexion->prepare("SELECT * FROM usuarios");
  $statement->execute();

  $resultados = $statement->get_result(); //* Obtenemos el resultado de la consulta

  $respuesta = [];

  while($fila = $resultados->fetch_assoc()){
    $usuario = [
      'id'      => $fila['id'],
      'nombre'  => $fila['nombre'],
      'edad'    => $fila['edad'],
      'pais'    => $fila['pais'],
      'correo'  => $fila['correo']
    ];

    array_push($respuesta, $usuario); //* Agregamos el usuario a la respuesta (arreglo_destino, arreglo_a_agregar)
  };
};

echo json_encode($respuesta);

?>
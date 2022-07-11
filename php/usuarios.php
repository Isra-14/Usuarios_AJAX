<?php

header ('Content-type: application/json; charset=utf-8');

$data = [
  [
    'id' => '1',
    'nombre' => 'Israel',
    'edad' => 22,
    'pais' => 'Mexico',
    'correo' => 'correo@correo.com'
  ],
  [
    'id' => '2',
    'nombre' => 'Alejandro',
    'edad' => 32,
    'pais' => 'España',
    'correo' => 'correo@correo.com'
  ]
];

echo json_encode($data);

?>
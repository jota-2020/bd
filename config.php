<?php
    extract($_REQUEST);
    $file=fopen("tripulantes.txt","a");

    fwrite($file,"nombre :");
    fwrite($file, $Nombre ."\n");
    fwrite($file,"rut :");
    fwrite($file, $rut ."\n");
    fwrite($file,"numero :");
    fwrite($file, $numero ."\n");
    fclose($file);
    header("location: index.html");
 ?>

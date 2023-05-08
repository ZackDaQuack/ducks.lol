<?php
    $path = "Ducks";
    $all_files = scandir($path);
    $all_files = array_diff($all_files, array(".", ".."));
    $one_file_index = array_rand($all_files);
    
    $file = $all_files[$one_file_index];
    $file_path = $path . '/' . $file;
    $url = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $file_path;
    
    header('Content-Type: image/jpeg');
    readfile($file_path);

    echo $url;
?>

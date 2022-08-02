<?php

$home = file_get_contents('http://127.0.0.1:8000/');

$needles = [
    '<div id="app" data-components="',
    'Welcome to your Splade application!',
];

$missing = [];

foreach ($needles as $needle) {
    if (!str_contains($home, $needle)) {
        $missing[] = $needle;
        echo "Not found: " . $needle . PHP_EOL;
    }
}

if (empty($missing)) {
    exit(0);
}

exit(1);

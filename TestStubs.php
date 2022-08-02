<?php

function value($value, ...$args)
{
    return $value instanceof \Closure ? $value(...$args) : $value;
}

function retry($times, callable $callback, $sleepMilliseconds = 0, $when = null)
{
    $attempts = 0;

    $backoff = [];

    if (is_array($times)) {
        $backoff = $times;

        $times = count($times) + 1;
    }

    beginning:
    $attempts++;
    $times--;

    try {
        return $callback($attempts);
    } catch (Exception $e) {
        if ($times < 1 || ($when && !$when($e))) {
            throw $e;
        }

        $sleepMilliseconds = $backoff[$attempts - 1] ?? $sleepMilliseconds;

        if ($sleepMilliseconds) {
            usleep(value($sleepMilliseconds, $attempts, $e) * 1000);
        }

        goto beginning;
    }
}

function get()
{
    $contents = file_get_contents('http://127.0.0.1:8000/');

    if (!$contents) {
        throw new Exception('No contents');
    }

    return $contents;
}

$home = retry(10, fn () => get(), 1000);

$needles = [
    '<div id="app" data-components="',
    'Welcome to your Splade application!',
];

$missing = [];

foreach ($needles as $needle) {
    if (!str_contains($home, $needle)) {
        $missing[] = $needle;
        echo 'Not found: ' . $needle . PHP_EOL;
    }
}

if (empty($missing)) {
    echo 'OK';
    exit(0);
}

exit(1);

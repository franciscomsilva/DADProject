#!/bin/bash

if [ ! -f /var/www/index.php ]; then
    wget https://github.com/vrana/adminer/releases/download/v4.7.5/adminer-4.7.5.php  -O /var/www/index.php
fi
/usr/bin/supervisord

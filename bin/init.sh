#!/bin/bash

APPHOME=/home/wasadm/node/sam.js/bin
PORT=${2:-8180}
case "$1" in
  start)
    forever start ${APPHOME}/sam.js $PORT
    ;;
  stop)
    forever stop ${APPHOME}/sam.js
    ;;
  restart)
    forever restart ${APPHOME}/sam.js
    ;;
  list)
    forever list
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|list}"
    exit 1
esac
exit 0

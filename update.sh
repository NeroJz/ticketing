#!/bin/bash

# Declare an array of string with type
declare -a StringArray=("auth" "expiration"
                   "orders" "payments" "tickets" )

for val in ${StringArray[@]}
do

  cd ~/udemy/microservices/ticketing/${val}

  rm -rf node_modules
  rm -rf package-lock.json
  npm i
done
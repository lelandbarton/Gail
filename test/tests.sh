#!/bin/bash


set -e 

#Setup test directory
#export GAIL_HOME
mkdir mock_home_directory
mkdir mock_home_directory/documents

mkdir mock_home_directory/.gail
cp -R templates mock_home_directory/.gail/

export GAIL_HOME="$(pwd)/mock_home_directory/.gail"
bash gail simple_c ./mock_home_directory/documents/test_poll
bash gail simple_c ./mock_home_directory/douments/test_poll


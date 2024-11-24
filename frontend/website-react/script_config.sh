# Si pas installe 
if ! command -v npm &> /dev/null
then
    sudo apt install npm
else
    echo "npm already install"

# pour installer les dependences sur pc
# Faire un script pour les installer sur les nouveaux projet 

# MUI dependencies

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
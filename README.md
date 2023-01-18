# Setup de un proyecto Ionic desde lineas de comando:

ionic start

# seleccionar (framework: angular)
# nombrar el proyecto (name: nombre_proyecto)
# seleccionar plantilla (Template: blank)

# algunos problemas en windows se resuelven asi
# npm install --global --production windows-build-tools
# npm install --global node-gyp

# si presenta librerias deprecadas
# npm install
# npm install --legacy-peer-deps

ionic s

# https://capacitorjs.com/docs/guides/storage
npm i @capacitor/core

npm i -D @capacitor/cli

npm install @ionic/storage
npm install @ionic/storage-angular

# creacion de guards
ionic g guard guards/home

# https://ionicframework.com/docs/layout/css-utilities

# generar pagina login  imports ReactiveFormsModule
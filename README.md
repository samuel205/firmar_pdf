# Firmar PDF

Aplicación para firmar documento pdf, con las firmas digitales de certificado .p12

## Requisitos

- [Node.js](https://nodejs.org/) instalado en tu máquina.

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-proyecto
   ```

2. Instala las dependencias:
   ```bash
    cd tu-repositorio
    npm install 
   ```
3. Coloca tu archivo de firma `.p12` en la carpeta `test`.

> **Nota**: No subas tu firma al repositorio para mantener la seguridad.

4. Ejecuta el compilador de Babel y firma el documento PDF de prueba con el siguiente comando

```bash
npm start
```
Una vez ejecutado se creará la carpea `signed`, en el ual se alacenará los archivos firmados.
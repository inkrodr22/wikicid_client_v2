# Wikicid Refactor

Proyecto dedicado a la refactorización de código y diseño para mejorar la estructura, legibilidad y apariencia de la aplicacion web WikiCid. Este proyecto se enfoca en optimizar el código existente y mejorar la experiencia del usuario a través de un diseño más atractivo y funcional.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

## Prettier Configuration

Detalle de la configuración de Prettier para mantener un estilo de código consistente y legible en el proyecto usando ESLint y Prettier en el archivo ![.prettierrc](.prettierrc).

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "printWidth": 80
}
```

- TrailingComma: Definimos que se deben agregar comas adicionales al final de un array o objeto.
- tabWidth: Establece el ancho de tabulación en 2 espacios por tabulacion.
- semi: Indicamos que si se deben agregar puntos y comas al final de cada declaración.
- singleQuote: Especifica que se deben usar comillas simples en lugar de comillas dobles para cadenas.
- jsxSingleQuote: Define si las cadenas en JSX y TSX deben usar comillas simples.
- bracketSameLine: Determina que los corchetes de apertura deben estar en la siguiente línea.
- arrowParens: Establece que los paréntesis alrededor de los argumentos de la función de flecha sean puestos solo si son necesarios.
- endOfLine: Define el estilo de salto de línea (LF para Unix)
- printWidth: Especifica la longitud máxima en 80 caracteres de línea antes de que Prettier aplique ajustes de formato.

Esta configuracion facilitara la colaboración y el mantenimiento del código a lo largo del tiempo de desarrollo.

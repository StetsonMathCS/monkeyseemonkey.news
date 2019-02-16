const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./config.js'),
        require('autoprefixer'),
    ],
};
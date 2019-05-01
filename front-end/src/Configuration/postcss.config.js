const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        tailwindcss('./src/Configuration/config.js'),
        autoprefixer,
        
    ],
};
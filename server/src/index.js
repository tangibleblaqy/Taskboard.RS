import 'dotenv/config'
import app from './app.js';

const PORT = process.env.PORT;

if (!PORT) {
    console.error('Variable de puerto no está definida, comprueba el archivo .env');
    process.exit(1);
}

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});


import { app } from './app.js';

const PORT = process.env.PORT || 3000;

// Log para inicio do servidor
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


/**
 * Tratamento de sinal de interrupção
 * Caso não seja feita dessa forma o servidor não é encerrado corretamente e a porta fica ocupada
 */
process.on('SIGINT', () => {
    console.log('Throwing holy hand grenade...');
    server.close();
    process.exit();
})
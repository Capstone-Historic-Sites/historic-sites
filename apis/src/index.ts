import { App } from './App';

async function main () {
    try {
        const app = new App(1912);
        await app.listen();
    } catch (e) {
        console.log(e);
    }
}

main();

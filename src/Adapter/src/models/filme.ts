import Midia from './midia';

class Filme extends Midia {
    private diretor: string = '';
    private roteirista: string = '';

    // Getters and Setters
    public getDiretor(): string {
        return this.diretor;
    }

    public setDiretor(diretor: string): void {
        this.diretor = diretor;
    }

    public getRoteirista(): string {
        return this.roteirista;
    }

    public setRoteirista(roteirista: string): void {
        this.roteirista = roteirista;
    }
}

export default Filme;
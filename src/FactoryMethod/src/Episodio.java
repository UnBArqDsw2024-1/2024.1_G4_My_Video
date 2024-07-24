public class Episodio {
    private String titulo;
    private int numero;
    private int duracao;
    private String descricao;

    public Episodio(String titulo, int numero, int duracao, String descricao) {
        this.titulo = titulo;
        this.numero = numero;
        this.duracao = duracao;
        this.descricao = descricao;
    }

    // Métodos getter e setter
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    // Método para imprimir informações do episódio
    public void printarInformacoes() {
        System.out.println("Episódio " + numero + ": " + titulo + " (" + duracao + " minutos)");
        System.out.println("Descrição: " + descricao);
    }
}

import axios from "axios";

export default class AcessoriosApi {
    async buscarTodosOsAcessorios() {
        const { data } = await axios.get("/acessorios/");
        return data.results;
    }
    async adicionarAcessorio(acessorio) {
        const { data } = await axios.post("/acessorios/", acessorio);
        return data.results;
    }
    async atualizarAcessorio(acessorio) {
        const { data } = await axios.put(`/acessorios/${acessorio.id}/`, acessorio);
        return data.results;
    }
    async excluirAcessorio(id) {
        const { data } = await axios.delete(`/acessorios/${id}/`);
        return data.results;
    }
}
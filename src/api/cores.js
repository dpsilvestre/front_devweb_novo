import axios from "axios";

export default class CoresApi {
    async buscarTodasAsCores() {
        const { data } = await axios.get("/cores/");
        return data.results;
    }
    async adicionarCor(cor) {
        const { data } = await axios.post("/cores/", cor);
        return data.results;
    }
    async atualizarCor(cor) {
        const { data } = await axios.put(`/cores/${cor.id}/`, cor);
        return data.results;
    }
    async excluirCor(id) {
        const { data } = await axios.delete(`/cores/${id}/`);
        return data.results;
    }
}
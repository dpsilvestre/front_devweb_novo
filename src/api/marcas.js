import axios from "axios";

export default class MarcasApi {
    async buscarTodasAsMarcas() {
        const { data } = await axios.get("/marcas/");
        return data.results;
    }
    async adicionarMarca(marca) {
        const { data } = await axios.post("/marcas/", marca);
        return data.results;
    }
    async atualizarMarca(marca) {
        const { data } = await axios.put(`/marcas/${marca.id}/`, marca);
        return data.results;
    }
    async excluirMarca(id) {
        const { data } = await axios.delete(`/marcas/${id}/`);
        return data.results;
    }
}
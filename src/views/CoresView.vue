<script setup>
import { ref, reactive, onMounted } from 'vue'
import CoresApi from '@/api/cores'
const coresApi = new CoresApi()

const defaultCor = { id: null, descricao: '' }
const cores = ref([])
const cor = reactive({ ...defaultCor })

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores()
})

function limpar() {
  Object.assign(cor, { ...defaultCor })
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarCor(cor)
  } else {
    await coresApi.adicionarCor(cor)
  }
  cores.value = await coresApi.buscarTodasAsCores()
  limpar()
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar)
} 

async function excluir(id) {
  await coresApi.excluirCor(id)
  cores.value = await coresApi.buscarTodasAsCores()
  limpar()
}
</script>

<template>
    <h1>Cor</h1>
    <hr />
    <div class="form">
        <input type="text" v-model="cor.nome" placeholder="Cor" />
        <button @click="salvar">Salvar</button>
        <button @click="limpar">Limpar</button>
    </div>
    <hr />
    <ul>
        <li v-for="cor in cores" :key="cor.id">
        <span @click="editar(cor)">
            ({{ cor.id }}) - {{ cor.nome }} - 
        </span>
        <button @click="excluir(cor.id)">X</button>
        </li>
    </ul>
</template>
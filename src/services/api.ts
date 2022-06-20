import axios from "axios";

export const api = axios.create({
  baseURL: 'https://app-gerenciamento-financeiro.herokuapp.com/api',
})
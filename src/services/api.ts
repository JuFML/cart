import axios from 'axios';

export const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/JuFML/fake-apis/refs/heads/main/"
})
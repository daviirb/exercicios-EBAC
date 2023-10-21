const listaAlunos = [
  {
    nome: "Ana",
    nota: 9.0
  },
  {
    nome: "Jose",
    nota: 6.5
  },
  {
    nome: "Marcos",
    nota: 7.0
  },
  {
    nome: "Vitor",
    nota: 4.0
  },
  {
    nome: "Karla",
    nota: 10
  },
  {
    nome: "Melissa",
    nota: 4.5
  },
  {
    nome: "Carlos",
    nota: 6.0
  }
]

filtraAlunos = (listaAlunos) => listaAlunos.nota >= 6


const novaLista = listaAlunos.filter(filtraAlunos)

console.log(novaLista)


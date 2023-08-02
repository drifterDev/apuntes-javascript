// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjecentList = {};
  }

  addNode(node) {
    this.adjecentList[node] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1);
  }
}

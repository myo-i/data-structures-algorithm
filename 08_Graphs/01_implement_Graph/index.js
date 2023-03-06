class Graph { 
    constructor() { 
      this.numberOfNodes = 0;
      this.adjacentList = {}; // 0:[1,2]
    } 
    addVertex(node)  { 
        if (!(node in this.adjacentList)) {
            this.adjacentList[node] = []
            this.numberOfNodes++;
        } else {
            console.log("Input already exists");
        }
    } 
    addEdge(node1, node2) { 
      //undirected Graph 
      if(node1 in this.adjacentList && node2 in this.adjacentList) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
      } else {
        console.log("Contains a non-existent key");
      }
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
   } 
   print() {
    console.log(this.numberOfNodes);
    console.log(this.adjacentList);
   }
} 
  
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.print();
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

// 存在しないキーを指定している場合
myGraph.addEdge('8', '5');
myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

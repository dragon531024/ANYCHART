var fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
jsonReader("../data.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var newdata = {nodes:[],edges:[]};
  for (var i=0; i<data.topology[0].node.length; i++){
    console.log(JSON. stringify(data.topology[0].node[i]['node-id']));
    var nodeID = data.topology[0].node[i]['node-id'];
    var nnode = {id: nodeID};
    newdata.nodes.push(nnode);
    
  } console.log("------------------------");
  for (var j=0; j<data.topology[0].link.length; j++){
    console.log(JSON. stringify(data.topology[0].link[j]['link-id']));
    var fromID = data.topology[0].link[j].source['source-node'];
    var nextID = data.topology[0].link[j].destination['dest-node'];
    var llink = {from: fromID, to: nextID};
    newdata.edges.push(llink);
  }

  fs.writeFile('../datatest.json', JSON.stringify(newdata), err => {
    if (err) {
        console.log(err);
    } else {
      console.log('File successfully written!')
    }
  });

});
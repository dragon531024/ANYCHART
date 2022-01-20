const fs = require("fs");
const { parse } = require("path/posix");
var obj = {
  "nodes" : [],
  "edges" : []
};


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
jsonReader("./data.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  
  for (var i=0; i<data['network-topology'].topology[0].node.length; i++){
    fs.writeFile('./fromindex.json', JSON.stringify(data['network-topology'].topology[0].node[i]['node-id'], null, 2), err => {
      if (err) {
          console.log(err);
      } else {
          console.log('File successfully written!')
      }
  });
    console.log(JSON. stringify(data['network-topology'].topology[0].node[i]['node-id']));
  }
  for (var j=0; j<data['network-topology'].topology[0].link.length; j++){
    console.log(JSON. stringify(data['network-topology'].topology[0].link[j]['link-id']));
  }
});

// fs.writeFile('./fromindex.json', JSON.stringify(newObject, null, 2), err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully written!')
//     }
// });
const fs = require("fs");

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
jsonReader("./data1.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  for (var i=0; i<data['network-topology'].topology[0].node.length; i++){
    console.log(JSON. stringify(data['network-topology'].topology[0].node[i]['node-id']));
  }
  for (var j=0; j<data['network-topology'].topology[0].link.length; j++){
    console.log(JSON. stringify(data['network-topology'].topology[0].link[j]['link-id']));
  }
});

// fs.writeFile('./newCustomer.json', JSON.stringify(newObject, null, 2), err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully written!')
//     }
// })
var first;
var otherThan;

var forEach = function(data, operation) {
  var head = first(data)[0];
  var tail = otherThan(data,0);
  return !head
    ? Promise.resolve()
    : operation(head).then(forEach(tail, operation));
};

first = function(array) {
  return array.length ? array.slice(0, 1) : false;
};

otherThan = function(array,index) {
  return array.filter(function(item, arrIndex) {
    return arrIndex !== index;
  });
};


// Sample

var payload = [{item:2},{item:3}]

var operation = (item)=>{
  console.log(item.item);
  return Promise.resolve();
}

forEach(payload,operation);

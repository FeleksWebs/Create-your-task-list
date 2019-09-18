function addText(){
  var input = document.getElementById('inputTask').value;
  var node=document.createElement("li");
  var textnode=document.createTextNode(input);
  node.appendChild(textnode);
  document.getElementById('addTask').appendChild(node);
  
  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function(e) {
      node.parentNode.removeChild(node);
  }, false);
  node.appendChild(removeTask);
  
}


  

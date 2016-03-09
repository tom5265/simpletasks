document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    var text = document.createTextNode('Click This Now.');
    btn.appendChild(text);
    document.body.appendChild(btn);
    btn.onclick = function() {
        alert('Good Morning!');
    }
  var divy = document.getElementById('hover');
  divy.onmouseenter = function () {divy.style.backgroundColor = 'red';
}
divy.onmouseleave = function () {
    divy.style.backgroundColor = 'blue';
}
var para = document.getElementById('change');
para.onclick = function () {
    para.style.color = 'red';
}
})


  function updateText () {
    var field = document.getElementById('textfield').value;
    alert(field);
}

function addName () {
    var nameDiv = document.getElementById('name-div');
    var span = document.createElement('span');
    span.innerHTML = 'Tom M.';
    nameDiv.appendChild(span);
}
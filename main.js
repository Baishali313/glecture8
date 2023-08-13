var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//add item
function addItem(e){
    e.preventDefault();


    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li= document.createElement('li');
    //add className
    li.className='list-group-item';
   // console.log(li);

   //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn =document.createElement('button');
    //add classes to delete button

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to list
    li.appendChild(deleteBtn)

    //append li to list
    itemList.appendChild(li);
}

//create remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
      //  console.log(1);
      if(confirm('are you sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
      }

    }
}
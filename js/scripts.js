function newItem() {
    //Adding new item to list
    let inputValue = $('#input').val(); 
    let li = $(`<li>${inputValue}</li>`)
    
    if (inputValue === '') {
        alert('Why would you add nothing to your to-do list...');
    } else {
        $('#list').append(li);
        $('form')[0].reset();
    }

    //Cross out complete task
    li.dblclick( function () {
        li.toggleClass('strike');
    });

    //Add delete button
    let crossOutButton = $('<button>X</button>')
    li.append(crossOutButton);

    crossOutButton.click( function () {
        li.remove();
    })

    //Reorder list items
    $('#list').sortable();

}

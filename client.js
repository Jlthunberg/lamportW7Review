$( document ).ready( onReady );

let inventory = [];

function addItem(){
    console.log( 'in addItem' );
    // get user inputs & place into an object
    let itemToAdd = {
        description: $( '#descriptionIn' ).val(),
        color: $( '#colorIn' ).val(),
        size: $( '#sizeIn' ).val()
    } // end itemToAdd
    console.log( 'itemToAdd:', itemToAdd );
    // push object into our inventory array
    inventory.push( itemToAdd );
    displayInventory();
} // end addItem

function displayInventory(){
    console.log( 'in displayInventory:', inventory );
    // target output ul by ID
    let el = $( '#inventoryOut' );
    // empty ul
    el.empty();
    // loop through inventory
    for( let i=0; i<inventory.length; i++){
        // append each item to ul
        el.append( `<li>
        ${ inventory[ i ].size }
        ${ inventory[ i ].color }:
        ${ inventory[ i ].description }</li>`)
    } // end for
} // displayInventory

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady
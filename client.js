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
    /// - TEMP
    console.log( 'inventory:', inventory );
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady
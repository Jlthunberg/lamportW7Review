$( document ).ready( onReady );

let inventory = [];
const verbose = true;

function addItem(){
    if( verbose ) console.log( 'in addItem' );
    // check for empty string, only add item if it has a description
    if( $( '#descriptionIn' ).val() === '' ){
       alert( 'item must have a description') 
    } // end no description
    else{
        // get user inputs & place into an object
        let itemToAdd = {
            description: $( '#descriptionIn' ).val(),
            color: $( '#colorIn' ).val(),
            size: $( '#sizeIn' ).val()
        } // end itemToAdd
        if( verbose ) console.log( 'itemToAdd:', itemToAdd );
        // push object into our inventory array
        inventory.push( itemToAdd );
        // empty input
        $( '#descriptionIn' ).val( '' );
        displayInventory();
    } // end has description
} // end addItem

function displayInventory(){
    if( verbose ) console.log( 'in displayInventory:', inventory );
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
    $( '#searchForItemButton' ).on( 'click', searchForItem );
} // end onReady

function searchForItem(){
    if( verbose ) console.log( 'in searchForItem' );
    // array to hold matches
    let matches = [];
    // get user input
    const searchSize = $( '#searchSizeIn' ).val();
    const searchColor = $( '#searchColorIn' ).val();
    if( verbose ) console.log( 'searching for:', searchSize, searchColor );
    // loop through inventory & find matches
    for( let i=0; i<inventory.length; i++ ){
        // if this item matches size push into matches
        if( inventory[ i ].size === searchSize && inventory[ i ].color === searchColor ){
            matches.push( inventory[ i ] );
        } // end match
    } // end for
    if( verbose ) console.log( 'matches:', matches );
    // display matches on DOM
    // loop through matches array
    for( let i=0; i<matches.length; i++){
        // target matchesOut by ID & empty
        let el = $( '#matchesOut' );
        el.empty();
        // append each to matchesOut ul
        el.append( `<li>
            ${ matches[ i ].size }
            ${ matches[ i ].color }:
            ${ matches[ i ].description }
            </li>`);
    } //end for
} // searchForItem
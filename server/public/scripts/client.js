console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log(response);
    appendKoalas(response);
  }).catch(function(error) {
    alert('Something went wrong!');
    console.log('Error in GET getKoalas, ', error);
  })
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: newKoala
  }).then( function ( response ){
    console.log( 'back from POST with:', response );
    getKoalas();
  }).catch( function ( error ) {
    console.log( error );
    alert( 'error posting koalas' );
  });
}

// readyForTransfer PUT function
// Ready for transfer will be a boolean value
// We will also base the Mark for Transfer Button
// off of this being true or false
function readyForTransfer() {
  const koalaId = $(this).data('id');
  // ^ NOTE: dependent on assigning id to transfer button: 
  $.ajax({
    method: 'PUT',
    url: `/koala/${koalaId}`
  }).then(function(response) {
    console.log('change readyforTransfer');
    getKoalas();
  });
}


// appendKoalas function
// Will be called by the getKoalas function
// pass in koala as an argument,
// empty Koalas list
// Append Koalas in a list to the DOM in a for loop
function appendKoalas(response) {
  $('#viewKoalas').empty();
  for(let koala of response) {
    let buttonText = koala.ready_for_transfer ? '' :
    `<button class = "transfer-button" data-id = ${koala.id}>
        Ready for Transfer
    </button>`; // Adds a "Ready for Transfer" button if the koala is 
    //marked as not ready to transfer
    $('#viewKoalas').append(`<tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.ready_for_transfer}</td>
      <td>${koala.notes}</td>
      <td>${buttonText}</td>
    </tr>`);
  }
}
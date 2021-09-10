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
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}


// get the koalas from the db
// check if ready to transfer true
// (might make more sense to add the if 
// statement in the initial appending 
// to the DOM)
// if false add a 'ready to transfer' button
// ready to transfer button on click 
// updates the ready to transfer to true
// and removes the button from the DOM
//  
// here should do a PUT method
// to update the database on button click
//

function isReadyToTransfer(){
  //const koalaTransfer = response.ready_for_transfer
  $.ajax({
    method: 'GET',
    url: '/koala'
  }).then(function (response) {
  
  }).catch(function (error) {
    console.log('Error in changing status', error);
  })
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
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
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
    // TODO Call function to append koalas to DOM here
    appendKoalas(response);
  }).catch(function(error) {
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


// appendKoalas function
// Will be called by the getKoalas function
// pass in koala as an argument,
// empty Koalas list
// Append Koalas in a list to the DOM in a for loop
function appendKoalas(response) {
  $('#viewKoalas').empty();
  for(let koala of response) {
    $('#viewKoalas').append(`<tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.ready_for_transfer}</td>
      <td>${koala.notes}</td>
    </tr>`);
  }
}
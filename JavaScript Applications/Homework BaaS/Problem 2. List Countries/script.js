reloadCountries();

//add country
$('#add-country > button')[0].addEventListener('click',function(){
    var newCountry = $('#add-country > input')[0];
    addCountry(newCountry.value);
    newCountry.value = null;
});

//edit country
$('#edit-country > button')[0].addEventListener('click',function(){
    var countryId = $('#edit-country > input')[0];
    var newCountryName = $('#edit-country > input')[1];
    editCountry(newCountryName.value,countryId.value);
    countryId.value = null;
    newCountryName.value = null;
});

//delete country
$('#delete-country > button')[0].addEventListener('click',function(){
    var countryId = $('#delete-country > input')[0];
    deleteCountry(countryId.value);
    countryId.value = null;
});

//add town
$('#add-town > button')[0].addEventListener('click',function(){
    var newTown = $('#add-town > input')[0];
    addTown(newTown.value);
    newTown.value = null;
});

//edit town
$('#edit-town > button')[0].addEventListener('click',function(){
    var townId = $('#edit-town > input')[0];
    var newTownName = $('#edit-town > input')[1];
    editTown(newTownName.value,townId.value);
    townId.value = null;
    newTownName.value = null;
});

//delete town
$('#delete-town > button')[0].addEventListener('click',function(){
    var townId = $('#delete-town > input')[0];
    deleteTown(townId.value);
    townId.value = null;
});
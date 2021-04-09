function getFormMissingFields(formId) {
    var missingFields = [];
    var formParams = {};
    jQuery('#' + formId)
    .serializeArray()
    .forEach(function(item) {
      let childName = item.name.replace('[]','');
      if (item.name.charAt(item.name.length-2) == '[]') {
        formParams[childName].push(item.value);
      } else {
        formParams[childName] = item.value;
      }
    });
    
    let field_ids = formParams.field_ids.split(',');
    
    field_ids.forEach(el => {
        if(jQuery(".field_" + el).hasClass('required-field')){
            if(formParams["field_" + el]) {
                if(formParams["field_" + el].length === 0) {
                    missingFields.push(el);
                } else {
                    jQuery(".field_" + el).removeClass('update-required');
                }
            } else {
                missingFields.push(el);
            }
        }
    });
    
    missingFields.forEach(el => {
        jQuery(".field_" + el).addClass('update-required');
    });
    
    return missingFields;
}
jQuery( document ).ready(function($) {
    getFormMissingFields('profile-edit-form');
    $('.required-field input,.required-field select,.required-field textarea').change( function(){
        getFormMissingFields('profile-edit-form'); 
    });
    $('input[type="submit"]').click( function(e){
        let missingFields = getFormMissingFields('profile-edit-form');
        let error = 'Please fillup ';
        if(missingFields.length !== 0){
            missingFields.forEach(el => {
                error += jQuery('.field_' + el + ' legend').text().replace('(required)','').trim() + ', ';
            });
            alert(error.slice(0,-2) + ' before submit the form');
            document.querySelector('.field_' + missingFields[0]).scrollIntoView(true);
            window.scrollBy(0,-100);
            document.querySelector('.field_' + missingFields[0]).focus();
            return false;
        }
    });
    
});

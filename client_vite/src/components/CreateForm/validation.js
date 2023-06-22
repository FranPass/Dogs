const validation = function(data) {
    const errors = {};
    const {name, image, min_height, max_height, min_weight, max_weight, min_life_span, max_life_span, temperaments} = data;
    
    if(name.length > 100 || name.length < 2){
        errors.name = 'The name must have less than 100 letters'
    }
    else if (/\d/.test(name)) {
        errors.name = 'The name cannot contain numbers'
    }

    if (min_height < 8 || min_height > 1200){
        errors.height = 'The height must be between 8cm and 1200cm'
    }
    else if (!(max_height < 1200 && max_height > min_height)) {
        errors.height = 'The maximum height must be greater than the minimum height and less than 1200cm'
    }
    if (min_weight < 0.5 || min_weight > 100){
        errors.weight = 'The weight must be between 0.5kg and 100kg'
    }
    else if (!(max_height < 100 && max_weight > min_weight)) {
        errors.weight = 'The maximum weight must be greater than the minimum weight and less than 100kg'
    }   
    if (min_life_span < 4 || min_life_span > 35){
        errors.life = 'The life span must be between 4 years and 35 years'
    }
    else if (!(max_life_span < 35 && max_life_span > min_life_span)) {
        errors.life = 'The maximum life span must be greater than the minimum life span and less than 35 years'
    }  
    if (temperaments.length === 0) {
        errors.temperaments = 'You must select at least 1 temperament'
    }
    else if (temperaments.length > 10) {
        errors.temperaments = 'You must select at most 10 temperaments'
    }
    if (!/(https?:\/\/.*\.(?:png|jpg|jpeg))/i.test(image) && image !== '') {
        errors.image = 'The input must be an url of an image (.jpeg, .jpg or .png)'
    }
    
    return errors
};

export default validation
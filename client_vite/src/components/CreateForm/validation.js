const validation = function(data) {
    const errors = {};
    const {name, image, min_height, max_height, min_weight, max_weight, min_life_span, max_life_span, temperaments} = data;
    
    if (!/^[A-Z]+$/i.test(name)) {
        errors.e0 = 'The name cannot contain numbers'
    }
    if(name.length > 100 || name.length < 2){
        errors.e1 = 'The name must have less than 100 letters'
    }
    if (min_height < 8 || min_height > 1100){
        errors.e2 = 'The height must be between 8cm and 1100cm'
    }
    if (max_height < 8 || max_height > 1100){
        errors.e3 = 'The height must be between 8cm and 1100cm'
    }
    if (max_height < min_height) {
        errors.e4 = 'The minimum height must be less than the maximum height'
    }
    if (min_weight < 0.5 || min_weight > 95){
        errors.e5 = 'The weight must be between 0.5kg and 90kg'
    }
    if (max_weight < 0.5 || max_weight > 95){
        errors.e6 = 'The weight must be between 0.5kg and 90kg'
    }
    if (max_weight < min_weight) {
        errors.e7 = 'The minimum weight must be less than the maximum weight'
    }    
    if (min_life_span < 4 || min_life_span > 35){
        errors.e8 = 'The life_span must be between 4 years and 35 years'
    }
    if (max_life_span < 4 || max_life_span > 35){
        errors.e9 = 'The life_span must be between 4 years and 35 years'
    }
    if (max_life_span < min_life_span) {
        errors.e10 = 'The minimum life_span must be less than the maximum life_span'
    }
    if (!temperaments.length) {
        errors.e11 = 'You must select at least 1 temperament'
    }
    if (temperaments.length > 10) {
        errors.e12 = 'You must select at most 10 temperaments'
    }
    if (!/(https?:\/\/.*\.(?:png|jpg|jpeg))/i.test(image)) {
        errors.e13 = 'The input must be an url of an image (.jpeg, .jpg or .png)'
    }
    
    return errors
};

export default validation
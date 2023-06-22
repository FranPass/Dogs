const validation = function (data) {
    const errors = {};
    // const {name, image, min_height, max_height, min_weight, max_weight, min_life_span, max_life_span, temperaments} = data;

    if (data.name) {
        if (!data.name) {
            errors.name = "Please enter the breed name";
        } else if (data.name.length > 100) {
            errors.name = "The name must have less than 100 letters";
        } else if (/\d/.test(data.name)) {
            errors.name = "The name cannot contain numbers";
        }
    }

    if (data.min_height || data.max_height) {
        if (data.min_height < 8 || data.min_height > 1200) {
            errors.height = "The height must be between 8cm and 1200cm";
        } else if (
            !(data.max_height < 1200 && data.max_height > data.min_height)
        ) {
            errors.height =
                "The maximum height must be greater than the minimum height and less than 1200cm";
        }
    }
    if (data.min_weight || data.max_weight) {
        if (data.min_weight < 0.5 || data.min_weight > 100) {
            errors.weight = "The weight must be between 0.5kg and 100kg";
        } else if (
            !(data.max_height < 100 && data.max_weight > data.min_weight)
        ) {
            errors.weight =
                "The maximum weight must be greater than the minimum weight and less than 100kg";
        }
    }
    if (data.min_life_span || data.max_life_span) {
        if (data.min_life_span < 4 || data.min_life_span > 35) {
            errors.life = "The life span must be between 4 years and 35 years";
        } else if (
            !(
                data.max_life_span < 35 &&
                data.max_life_span > data.min_life_span
            )
        ) {
            errors.life =
                "The maximum life span must be greater than the minimum life span and less than 35 years";
        }
    }
    if (data.temperaments) {
        if (data.temperaments.length === 0) {
            errors.temperaments = "You must select at least 1 temperament";
        } else if (data.temperaments.length > 10) {
            errors.temperaments = "You must select at most 10 temperaments";
        }
    }
    if (data.image) {
        if (
            !/(https?:\/\/.*\.(?:png|jpg|jpeg))/i.test(data.image) &&
            data.image !== ""
        ) {
            errors.image =
                "The input must be an url of an image (.jpeg, .jpg or .png)";
        }
    }
    return errors;
};

export default validation;

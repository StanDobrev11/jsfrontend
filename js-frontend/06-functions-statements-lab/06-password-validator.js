function validate(password) {

    const result = []

    const checkLength = function(password)   {
        if (password.toString().length < 6 || password.toString().length > 10) {
            return "Password must be between 6 and 10 characters"
        }
        
        return true
    }

    const checkContent = function(password) {
    
        const array = password.toString().split('')
        const pattern = /[a-zA-Z\d]/
    
        for (const element of array) {
             if (pattern.test(element)) {
                continue
             }
    
             return "Password must consist only of letters and digits"
        
        }
        return true
    };

    const checkDigitsCount = function(password) {
        const pattern = /\d{2,}/

        if (!pattern.test(password)) {
            return "Password must have at least 2 digits"
        }

        return true
    }
    
    const lengthCheckResult = checkLength(password);
    if (lengthCheckResult !== true) {
        result.push(lengthCheckResult);
    }

    const contentCheckResult = checkContent(password);
    if (contentCheckResult !== true) {
        result.push(contentCheckResult);
    }

    const digitsCheckResult = checkDigitsCount(password);
    if (digitsCheckResult !== true) {
        result.push(digitsCheckResult);
    }

    if (result.length === 0) {
        result.push("Password is valid");
    }

    console.log(result.join('\n'))
}

    





validate('#5sdfsdfsdfsasd')
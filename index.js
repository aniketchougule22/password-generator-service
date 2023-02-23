/**
 * Generate password from allowed word
 */

const unique = (min, max) => {
    const random = Math.random();
    return Math.floor(random * (max - min) + min);
}

  
const generatePassword = (length, options) => {

    const digits = '0123456789'
    const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase()
    const specialChars = '#!&@'

    options = { upperCaseAlphabets: options, specialChars: options };
    length = length || 6
    const generateOptions = options || {}

    generateOptions.digits = Object.prototype.hasOwnProperty.call(generateOptions, 'digits') ? options.digits : true
    generateOptions.lowerCaseAlphabets = Object.prototype.hasOwnProperty.call(generateOptions, 'lowerCaseAlphabets') ? options.lowerCaseAlphabets : true
    generateOptions.upperCaseAlphabets = Object.prototype.hasOwnProperty.call(generateOptions, 'upperCaseAlphabets') ? options.upperCaseAlphabets : true
    generateOptions.specialChars = Object.prototype.hasOwnProperty.call(generateOptions, 'specialChars') ? options.specialChars : true

    const allowsChars = ((generateOptions.digits || '') && digits) +
        ((generateOptions.lowerCaseAlphabets || '') && lowerCaseAlphabets) +
        ((generateOptions.upperCaseAlphabets || '') && upperCaseAlphabets) +
        ((generateOptions.specialChars || '') && specialChars)

    let password = ''

    for (let i = password.length; i < length; i++) {
        const charIndex = unique(0, allowsChars.length)
        if (password.length === 0 && generateOptions.digits === true && allowsChars[charIndex] === '0') 
        {
            continue
        }
        password += allowsChars[charIndex]
    }

    return password
}

module.exports = {
    generatePassword
}
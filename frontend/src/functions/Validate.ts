function Validate (input: string, type: string) {
    switch (type) {
        case 'email':
        // Ensure email is in correct format.
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            return (true)
        }
        break
        case 'pass':
        // Ensure password contains at least 8 characters that include at least 1 number and special character.
        if (input.length >= 8 && /\d/.test(input) && /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(input)) {
            return (true)
        }
        break
        case 'zip':
        // Ensure zip code contains 5 characters that are only numbers.
        if (input.length == 5 && /^\d+$/.test(input)) {
            return (true)
        }
        break
        case 'phone':
        // Ensure phone number contains 10 characters that are only numbers.
        if (input.length == 10 && /^\d+$/.test(input)) {
            return (true)
        }
    }

    return (false)
}

export default Validate
function Validate (input: string, type: string) {
    switch (type) {
        case "email":
        // Ensure email is in correct format.
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            return (true)
        }
        break
        case "pass":
        // Ensure password is at least 8 characters.
        if (input.length >= 8) {
            return (true)
        }
        break
        case "zip":
        // Ensure zip code has a length of 5 and is only numbers.
        if (input.length == 5 && /^\d+$/.test(input)) {
            return (true)
        }
        break
        case "phone":
        // Ensure phone number has a length of 10 and is only numbers.
        if (input.length == 10 && /^\d+$/.test(input)) {
            return (true)
        }
    }

    return (false)
}

export default Validate
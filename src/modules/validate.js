const validate = list => {
    let success = true;

    list.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'user_phone':
                if (elem.value.length === 18) {
                    return;
                }
                break;
            case 'user_email':
                if (/^[a-z\d-\_\.!~*']+@[a-z\d-\_\.!~*']+.[a-z]{2,3}$/gi.test(elem.value.trim())) {
                    return;
                }
                break;
            default: return;
        }

        success = false;
    });

    return success;
};

export default validate;
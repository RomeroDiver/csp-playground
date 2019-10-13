(function() {
    document.addEventListener('submit', function submitEvent(e) {
        e.preventDefault();
        const values = $(e.target)
            .serializeArray()
            .reduce((acc, val) => ({ ...acc, [val.name]: val.value}), {});

        fetch('http://localhost:3000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
    })
})()
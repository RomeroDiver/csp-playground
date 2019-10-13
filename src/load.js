(function() {
    function addScript(scriptSrc) {
        const scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'text/javascript');
        scriptEl.src = scriptSrc;
        document.body.appendChild(scriptEl);
    }
    function addStyle(styleHref) {
        const styleEl = document.createElement('link');
        styleEl.setAttribute('rel', 'stylesheet');
        styleEl.href = styleHref;
        document.head.appendChild(styleEl);
    }
    function addIframe(iframeUrl, $containerEl) {
        const iframeEl = document.createElement('iframe');
        iframeEl.src = iframeUrl;
        $containerEl.append(iframeEl);
    }

    const $loadBtn = $('#loadBtn')
    $loadBtn.on('click', function clickLoad(e) {
        e.preventDefault();

        fetch('http://localhost:3000/form', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(values => {
            $('#nameContent').text(`${values.firstName} ${values.lastName}`);
            $('#descriptionContent').text(values.description);
            addScript(values.scriptUrl);
            addStyle(values.cssUrl);
            addIframe(values.iframeUrl, $('#content'))
        })
    })
})()
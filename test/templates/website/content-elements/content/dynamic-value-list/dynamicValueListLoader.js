// TODO test in Story

document.querySelectorAll('.dynamic-value-list[data-bsi-rest-resource]').forEach(dynamicSelect => {
    let url = dynamicSelect.getAttribute('data-bsi-rest-resource');
    fetch(url).then(response => response.json())
        .then(data => dynamicSelect.querySelector('select').innerHTML = Array.from(data.options).map(option => `<option value="${option.id}">${option.text}</option>`))
})
if (location.search && !isNaN(parseInt(location.search.substring(2, location.search.includes('&') ? location.search.indexOf('&') : location.search.length))))
for (let button of document.querySelector('.btn'))
button.href = 'https://t.me/r1414m_bot?start=' + location.search.substring(2, location.search.includes('&') ? location.search.indexOf('&') : location.search.length);

if (location.hash && !isNaN(parseInt(location.hash.substring(1))))
    location.href = 'https://t.me/r1414m_bot?start=' + location.hash.substring(1)
else
    console.log(location.hash)
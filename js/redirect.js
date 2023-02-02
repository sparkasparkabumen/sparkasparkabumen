var interval;
if (location.search && !isNaN(parseInt(location.search.substring(2, location.search.includes('&') ? location.search.indexOf('&') : location.search.length)))){
for (let button of document.querySelectorAll('.btn')) button.href = 'https://t.me/ubtexpert_bot?start=' + location.search.substring(2, location.search.includes('&') ? location.search.indexOf('&') : location.search.length);
for (let link of document.querySelectorAll('.link')){
    link.parentElement.href = '#home';
    link.parentElement.target = '';
    link.onclick = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            let buttons = document.querySelectorAll('.btn');
            if (buttons[0].style.backgroundColor == 'rgb(255, 255, 255)')
                buttons[0].style.backgroundColor = '#00E77F';
            else
                buttons[0].style.backgroundColor = '#ffffff';
    
            if (buttons[1].style.backgroundColor == 'rgb(255, 255, 255)')
                buttons[1].style.backgroundColor = '#00E77F';
            else
                buttons[1].style.backgroundColor = '#ffffff';
        }, 500);
    }
}
}

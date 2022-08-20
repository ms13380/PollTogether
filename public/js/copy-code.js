const copyCode = async (event) => {
    let code = document.querySelector('#share-code');
    code.select();
    code.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(code.value);

    let inform = document.querySelector('#inform-copy');
    inform.classList.remove('hidden');
    timer(inform);
    
}

async function timer(el) {
    let time = 3;
    let timeInterval = setInterval(function() {
        if (time > 1) {
            time--;
        } else {
            el.classList.add('hidden');
            clearInterval(timeInterval);
        }
    }, 800);
}


document.querySelector('#copy-code').addEventListener('click', copyCode);
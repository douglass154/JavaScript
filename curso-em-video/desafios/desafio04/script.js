function tabuada() {
    let num = document.querySelector('#num')
    let tab = document.querySelector('#seltabuada')

    if(num.value == 0) {
        alert("Por favor, digite um número!!")
    } else {
        let number = Number(num.value)
        c = 1
        tab.innerHTML = ''
        
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${number} X ${c} = ${number*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
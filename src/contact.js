function contact(){

    const container = document.getElementById('content')

    const form = document.createElement('div')
    form.classList.add('form')

    const text = document.createElement('h1')
    text.innerText = 'Contact us at'
    form.appendChild(text)

    const email = document.createElement('p')
    email.innerText = 'LosPollos@breakingBad.com'
    form.appendChild(email)

    const number = document.createElement('p')
    number.innerText = '999-777-000'
    form.appendChild(number)

    const head = document.createElement('h1')
    head.innerText = 'Get In Touch'
    form.appendChild(head)

    const label1 = document.createElement('label')
    label1.innerText = 'Email:'
    form.appendChild(label1)

    const input1 = document.createElement('input')
    input1.classList.add('email')
    form.appendChild(input1)

    const label2 = document.createElement('label')
    label2.innerText= "Message:"
    form.appendChild(label2)

    const input2 = document.createElement('textarea')
    input2.classList.add('message')
    form.appendChild(input2)

    container.appendChild(form)
}

export {contact}
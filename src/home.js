import image from './images/logo.png'
import gus from './images/gus.png'

function home(){

    const container = document.getElementById('content')

    const div = document.createElement('div')
    div.classList.add('head')

    const elem = document.createElement('div')
    elem.classList.add('img')
    const odinImage = document.createElement('img')
    odinImage.src = image
    elem.appendChild(odinImage)
    div.appendChild(elem)

    const main = document.createElement('div')
    main.classList.add('main')
    const heading = document.createElement('h1')
    heading.innerText = 'Los Pollos Hermanos'
    main.appendChild(heading)

    const para = document.createElement('p')
    para.innerText = 'Welcome to Los Pollos Hermanos where chicken is served fresh'
    main.appendChild(para)

    const para2 = document.createElement('p')
    para2.innerText = 'Now Open in 8 new locations'
    main.appendChild(para2)

    const para3 = document.createElement('p')
    para3.innerText = 'Get your fried chicken TODAY!!'
    main.appendChild(para3)

    div.appendChild(main)

    const quote = document.createElement('div')
    quote.classList.add('quote')
    const box = document.createElement('p')
    box.classList.add('box1')
    box.innerText = `"The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know."`
    quote.appendChild(box)

    const box2 = document.createElement('p')
    box2.classList.add('box2')
    box2.innerText = '-Gustavo Fring'
    quote.appendChild(box2)

    const chickenMan = document.createElement('img')
    chickenMan.classList.add('gus')
    chickenMan.src = gus
    div.appendChild(chickenMan)

    div.appendChild(quote)

    container.appendChild(div)

}

export {home}
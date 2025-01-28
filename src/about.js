import walter from './images/walter.png'

function about(){
    const container = document.getElementById('content')

    const about = document.createElement('div')
    about.classList.add('about')

    const div = document.createElement('div')
    div.classList.add('info')
    const info = document.createElement('h1')
    info.innerText = 'About Us'
    div.appendChild(info)

    const mainInfo = document.createElement('p')
    mainInfo.innerText = 'Los Pollos Hermanos was an elaborate money laundering scheme, and a drug/criminal enterprise disguised as a fast-food restaurant chain that specialized in fried chicken operating across the southwestern United States. The name is ungrammatical Spanish for "The Chicken Brothers." Founded by Gustavo Fring and Max Arciniega, the restaurant chain had fourteen locations throughout the southwest and was Gustavo Fring\'s major business concern.'
    div.appendChild(mainInfo)

    const image = document.createElement('img')
    image.classList.add('walter')
    image.src = walter
    div.appendChild(image)

    about.appendChild(div)
    container.appendChild(about)
}

export {about}

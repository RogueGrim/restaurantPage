import './styles.css'
import {home} from './home.js'
import {about} from './about.js'
import {contact} from './contact.js'

home()

function clear(){
    const container = document.getElementById('content')
    container.innerHTML=''
}

function eventHandlers(){
    const first = document.querySelector('.home')

    first.addEventListener('click',()=>{
        clear()
        home()
    })

    const second = document.querySelector('.about')

    second.addEventListener('click',()=>{
        clear()
        about()
    })

    const third = document.querySelector('.contact')

    third.addEventListener('click',()=>{
        clear()
        contact()
    })

}

eventHandlers()
console.log('site is running')


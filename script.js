let object = {
    user: 'abdumalik',
    password: 2009
}

let inpt = document.querySelector('.malumot')
let inpp = document.querySelector('.malumot1')
let btn = document.querySelector('.kirish')
let h3 = document.querySelector('h3')




btn.addEventListener('click',()=>{
    

    if(inpt.value == object.user && inpp.value == object.password){
         h3.textContent = 'Hush kelibsiz'
         h3.style.marginLeft = '240px'
        h3.style.color = 'green'
    
    }else{
       h3.textContent = 'Bunday akkaunt mavjud emas'
       h3.style.color = 'red'
       h3.style.marginLeft = '140px'
    }
})
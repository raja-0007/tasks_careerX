

var profile = document.getElementById('one')
profile.addEventListener('mouseover',()=>{
    document.getElementById('onein').style.height = '100px'
    
})
profile.addEventListener('mouseout',()=>{
    document.getElementById('onein').style.height = '0px'
})

var messages = document.getElementById('two')
messages.addEventListener('mouseover',()=>{
    document.getElementById('twoin').style.height = '150px'
})
messages.addEventListener('mouseout',()=>{
    document.getElementById('twoin').style.height = '0px'
})

var settings = document.getElementById('three')
settings.addEventListener('mouseover',()=>{
    document.getElementById('threein').style.height = '100px'
})
settings.addEventListener('mouseout',()=>{
    document.getElementById('threein').style.height = '0px'
})
let image=document.getElementById('image')
let content=document.getElementById('content')
let create =document.getElementById('create')
create.onclick=()=>{
    if(content=='') return;
    let linkQR='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'
    image.src=linkQR +'?size=500x5007data=' + content.value
} 
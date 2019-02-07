function winScroll(){
    if(document.body.scrollTop>0){
        let lineScroll = document.getElementById("lineScroll")
        lineScroll.style.display="none"
    }else{
        lineScroll.style.display="block"
    }
    let detail = document.getElementsByClassName("detail")[0]
    let top =Number(detail.style.top.split('px')[0])
    if(top>document.body.scrollTop){
        detail.style.top=document.body.scrollTop.toString()+'px'
    }
}   
window.addEventListener('scroll',winScroll);


let homelist = document.getElementById("homelist")
renderList(homelist,SETTING.homelist)

setTimeout(() => {
    let start = document.getElementById("start")
    start.style.display="none"
}, 2000);
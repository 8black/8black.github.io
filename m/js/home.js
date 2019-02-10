function winScroll(){
    if(document.body.scrollTop>0){
        let lineScroll = document.getElementById("lineScroll")
        lineScroll.style.display="none"
    }else{
        lineScroll.style.display="block"
    }
}   
window.addEventListener('scroll',winScroll);

let homelist = document.getElementById("homelist")
updatalist("homelist",homelist)

setTimeout(() => {
    let start = document.getElementById("start")
    start.style.display="none"
}, 2000);
function winScroll(){
    let detail = document.getElementsByClassName("detail")[0]
    let top =Number(detail.style.top.split('px')[0])
    if(top>document.body.scrollTop){
        detail.style.top=document.body.scrollTop.toString()+'px'
    }
}   
window.addEventListener('scroll',winScroll);


let illustrationlist = document.getElementById("illustrationlist")
renderList(illustrationlist,SETTING.illustrationlist)
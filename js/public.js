let scrollPos = ""
let detalIndex = 0
let detailArr =[]

function resize(){
    let botton = document.getElementById("navButton")
    let navMenu = document.getElementById("navMenu")

    let width ="50%"
    if( window.innerWidth  <1200){
        width = "600px"
    }
    navMenu.style.width=width
    if(botton.classList.value.indexOf('open') >0){
        navMenu.style.left = "0"
        
    }else{
        navMenu.style.left = "-"+width
    }
}
function toggle(menu) {
    menu.classList.toggle("open");
    menu.classList.toggle("close");
    resize()
}
function loadDetail(i){
    scrollPos = document.body.scrollTop
    document.body.scrollTop=0

    let detail = document.getElementsByClassName("detail")[0]
    let detailC = document.getElementsByClassName("detail-close")[0]

    let wrap = document.getElementsByClassName("wrap")[0]
    wrap.innerHTML=""
    wrap.onclick=function(e){ 
        e.stopPropagation();
    }
   
    detalIndex = Number(i)
    let title = document.createElement("h1")
    title.innerHTML=detailArr[detalIndex].title
    wrap.appendChild(title)
    let date = document.createElement("h2")
    date.innerHTML=detailArr[detalIndex].date
    wrap.appendChild(date)
    let description = document.createElement("p")
    description.innerHTML=detailArr[detalIndex].description
    wrap.appendChild(description)
    let image= document.createElement("img")
    image.src= detailArr[detalIndex].detailSrc
    wrap.appendChild(image)

    detail.style.display="block"
    detailC.style.height = document.body.offsetHeight+30
    detail.style.top=document.body.scrollTop
    detail.scroll(function(event){
        event.stopPropagation();
    })
}
function renderList(list, arr){
    detailArr = arr
    list.innerHTML=""
    for(let i=0; i<arr.length; i++){
        //添加一个子标签
        let id= list.id+i.toString()
        let ele = document.createElement("div");
        ele.id = id
        ele.className+=" "+"work"
        const _i = i
        ele.onclick=function(){
            loadDetail(_i);
        } 
        let image= document.createElement("img")
        image.src= arr[i].imgSrc
        ele.appendChild(image);
        let title = document.createElement("h1")
        title.innerHTML=arr[i].title
        ele.appendChild(title);
        let date = document.createElement("p")
        date.innerHTML= arr[i].date
        ele.appendChild(date);

        list.appendChild(ele);
    }
}


function closeDetail(){
    let detail = document.getElementsByClassName("detail")[0]
    detail.style.display = "none"
    document.body.scrollTop=scrollPos
}

function pageLeft(){
    document.body.scrollTop=scrollPos
    detalIndex = detalIndex-1
    if(detalIndex <0){
        detalIndex=detailArr.length-1
    }
    loadDetail(detalIndex)
}

function pageRight(){
    document.body.scrollTop=scrollPos
    detalIndex = detalIndex+1
    if(detalIndex>detailArr.length-1){
        detalIndex=0
    }
    loadDetail(detalIndex)
}

function selectedNav(ele){
    for(let i=1; i<6; i++){
        let id ="navlist"+i.toString()
        let item = document.getElementById(id)
        item.classList=""
    }
    ele.classList+="selected"
}

window.onresize=function(){
    resize();
}



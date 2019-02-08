function mouseMove(e){
    let x = e.clientX
    let y = e.clientY
    let width = window.innerWidth
    let height = window.innerHeight
    let percentX = x/width
    let percentY = y/height

    let skewFront = 5 + percentY*10
    let skewBack = -percentY*10

    let rotateFront = 20*(percentX-0.5)
    let rotateBack = -60*(percentX-0.5)

    let frontEle = document.getElementById("animFront")
    let backEle = document.getElementById("animBack")


    let frontTransform= "transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"
    let backTransform= "transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
    frontEle.style=frontTransform
    backEle.style=backTransform
}

function showTitle(ele,msg){
    let title = document.getElementById("title")
    let triangle=document.getElementById("triangle")
    let position=ele.getBoundingClientRect()
    title.style.display="block"
    triangle.style.display="block"
    title.style.left =(position.x-100).toString()+"px";
    title.style.top=(position.y+50).toString()+"px";
    triangle.style.left =(position.x-15).toString()+"px";
    triangle.style.top=(position.y).toString()+"px";
    title.innerHTML=msg
    if(position.y > document.body.clientHeight-200){
        document.body.scrollTop=100
    }
}
function hideTitle(){
    let title = document.getElementById("title")
    let triangle=document.getElementById("triangle")
    title.style.display="none"
    triangle.style.display="none"
}

function showCode(){
    let code = document.getElementById("code")
    code.style.display="block"
}

function hideCode(){
    let code = document.getElementById("code")
    code.style.display="none"
}
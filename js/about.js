function mouseMove(e){
    let x = e.clientX
    let y = e.clientY
    let width = window.innerWidth
    let height = window.innerHeight
    let percentX = x/width
    let percentY = y/height

    let skewFront = 5 + percentY*2
    let skewBack = -percentY*2

    let rotateFront = 0
    let rotateBack = 0

    var userAgentInfo = navigator.userAgent;
    var Agents = "Chrome";
    let flag=false
   if (userAgentInfo.indexOf(Agents) > 0) {
        flag = true;
    }
    
    if(flag){
        rotateFront = 10*(percentX-0.5)
        rotateBack = -10*(percentX-0.5)
    }


    let frontEle = document.getElementById("animFront")
    let backEle = document.getElementById("animBack")


    let frontTransform= "transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"
    frontTransform+="-ms-transform:transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"
    frontTransform+="moz-transform:transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"
    frontTransform+="-webkit-transform:transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"
    frontTransform+="-o-transform:transform:perspective(1500px) skewY("+skewFront.toString()+"deg) rotateY("+rotateFront.toString()+"deg);"


    let backTransform= "transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
    backTransform += "-ms-transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
    backTransform += "moz-transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
    backTransform += "-webkit-transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
    backTransform += "-o-transform:perspective(2000px) skewY("+skewBack.toString()+"deg) rotateY("+rotateBack.toString()+"deg);"
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
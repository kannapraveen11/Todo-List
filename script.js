let wen=document.getElementsByClassName("add")[0];

wen.addEventListener('click',()=>{
    let content=document.getElementsByClassName("val")[0].value
    if(content==""){
        alert("enter note bro");
        
    }else{
    let c=document.createElement('li');
    c.append(document.createTextNode(content));
    let main=document.getElementsByClassName('list')[0];
    let span =document.createElement('span');
    span.innerHTML='&#10005';
    c.appendChild(span);
    main.appendChild(c);
}
document.getElementsByClassName("val")[0].value="";
save();
})
let rem=document.getElementsByClassName('list')[0];
rem.addEventListener('click',function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('check');
        save();
    }else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        save();
    }
});
function save(){
    localStorage.setItem("data",rem.innerHTML);
}
function show(){
    rem.innerHTML=localStorage.getItem('data');
}
show();




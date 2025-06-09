const one=document.getElementById("one");
one.addEventListener("input",function(e){
    console.log(this);
    console.log(e);

})
async function name(params) {
    const data=fetch('')
    await data.json()
}

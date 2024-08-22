const result = document.querySelector("#result");
const allBtns = document.querySelectorAll(".btn");
const equalBtn = document.querySelector("#equal");
const resetBtn = document.querySelector("#reset");

[...allBtns].map(btn=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        result.value+=e.target.value
    });
});

equalBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    result.value=eval(result.value);
});

resetBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    result.value=0;
});
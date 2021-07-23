const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    // console.log(panel);
    panel.addEventListener('mouseenter',()=>{
        removeactiveclass();
        panel.classList.add('active');

    })
   
});

function removeactiveclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}
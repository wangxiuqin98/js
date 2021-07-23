//Ui
const panels = document.querySelectorAll('.panel');

// console.log(panels);

panels.forEach((panel)=>{
    console.log(panel);

    panel.addEventListener('mouseenter',()=>{
        // mouseenter or click or mouseleave (as you like)
        // console.log("hey");

        removeactiveclass();
        panel.classList.add('active');
    })

});

function removeactiveclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}

let container = document.querySelector('.containers');
let clear = document.querySelector('.clear');

let search = document.querySelector('.search');
 search.onclick = function(){
    document.querySelector(".containers").classList.toggle('active');
};

clear.onclick = function(){
    document.getElementById("search").value = "";
};


const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        // get the target and the count
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target){
            counter.innerText = count + inc;
            setTimeout(updateCount, 100);

        }
        else{
            count.innerText = target;
        }
        

    }

    updateCount();
});

function openSlidemenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeSlidemenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

var dropdown = document.getElementsByClassname("dropdown-menu-1");
var i;
for (i = 0; i < dropdown.length; i++){
    dropdown[i].addEventlistener("click",function(){
        this.classList.toggle("activez");
        var dropdowncontent = this.nextElementSibling;
        if (dropdowncontent.style.display === "block"){
            dropdowncontent.style.display = "none";
        }
        else{
            dropdowncontent.style.display = "block";
        }
    });
}
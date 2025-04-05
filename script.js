function myFun() {
    let searchVal = document.getElementById("inp").value.toUppercase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    let front = document.querySelector(".main")

    for(let i=0; i<tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if(td) {
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchVal) > -1) {
                tr[i].style.display="";
                front.style.display="none";
            }
            else {
                tr[i].style.display="none";
            }
        }
    }
if(searchVal == "") {
    front.style.display="flex";
}

}
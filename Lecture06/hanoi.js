//학번 : 202127059
//이름 : 박정민

var arrLeft = [];
var arrRight = [];
n = 0;

function Move(){
    const Hanoi = document.getElementsByName("hanoi");

    if(Hanoi[0].checked)
        arrRight.push(arrLeft.pop());
    if(Hanoi[1].checked)
        arrLeft.push(arrRight.pop());

    Draw()
}


function Init(){

    arrLeft = [];
    arrRight = [];
    n++


    arrLeft.push("🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥");
    arrLeft.push("🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨");
    arrLeft.push("🟩 🟩 🟩 🟩 🟩 🟩 🟩");
    arrLeft.push("🟦 🟦 🟦 🟦 🟦");
    arrLeft.push("🟪 🟪 🟪");
    arrLeft.push("⬛");

    if (n >= 1) arrRight.push();
    else {
        arrLeft(5).push([]);
        arrRight.push([arrLeft(5).text, arrRight]);
        }


    

    Draw();
}

function Draw()
{

    var ui_side_left = document.getElementsByClassName("first")
    while ( ui_side_left[0].hasChildNodes() ) { ui_side_left[0].removeChild( ui_side_left[0].firstChild ); }
    var ui_side_right = document.getElementsByClassName("third")
    while ( ui_side_right[0].hasChildNodes() ) { ui_side_right[0].removeChild( ui_side_right[0].firstChild ); }





    for(var i=0;i<arrLeft.length;i++){
        let ptag = document.createElement('p');

        ptag.appendChild(document.createTextNode(arrLeft[i]));
        ui_side_left[0].appendChild(ptag);

    }

    for(var i=0;i<arrRight.length;i++){
        let ptag = document.createElement('p');



        ptag.appendChild(document.createTextNode(arrRight[i]));
        ui_side_right[0].appendChild(ptag);

    }

    
}
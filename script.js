$('#send').attr("disabled", "true")

$("#check").click(function () {
    if ($("#check")[0].checked === true) {
        $('#send')[0].removeAttribute("disabled")
    }
    else {
        $('#send').attr("disabled", "true")
    }
})

// CONSIGNE 2 A REVOIR
//$("img").error(function () {
//    $(this).css("display", "none");
//});

function clignote (element) {
    if (element.style.display === "none") {
        element.style.display = "inline"
    }
    else {
        element.style.display = "none"
    }
}

setInterval(() => clignote(document.querySelector("#clicli")), 200)
$('tr:odd').css("background-color",'red')

function imprimer_page(){
    window.print();
}

$('#print').click(() => imprimer_page())

function limitText (item, maxLength) {
    item.attr("maxlength", maxLength.toString())
}

limitText($("#length"), 30)

$('p').each(function (index, elem) {
    const wordArray = elem.innerText.split(" ")
    wordArray[0] = "<b>" + wordArray[0] + "</b>"
    elem.innerHTML = wordArray.join(" ")
})

$("#colorBtn").click(function () {
    $('#colorDiv').css("color", $("#color").val())
})

$("#backBtn").click(function () {
    $('#colorDiv').css("background-color", $("#back").val())
})

let toMove = $('#toMove')
toMove.appendTo('#div2')

let static = {
    name : "Jérome",
    value : "Ton kata me rend fou !!!!"
}

$('#static').text(JSON.stringify(static))

$("#toLiBtn").click(function () {
    $('#ol')[0].innerHTML += "<li>" + $("#toLi").val() + "</li>";
})

$('#delOpt').click(function () {
    $('#selecto option').remove()
})

$('#optValid').click(function () {
    $("#selecto")[0].innerHTML += "<option>" + $('#opt').val() + "</option>"
})

function under (elem) {
    elem.css("text-decoration", "underline");
}

under($("#under"));

let val = $('#getval').val();

function removeClass (elem) {
    elem.removeClass();
}

$("#cssTest").css("width", "500px");
$("#cssTest").removeAttr('style');

$('body').click(function(event){
    console.log("clic gauche")
});

$('body').contextmenu(function () {
    console.log("clic droit")
})

function checkInt (number) {
    if (Number.isInteger(number)) {
        return true
    }
    return false
}

console.log(checkInt(3))

$("body").keypress((e) => {
    if (e.key === "Enter"){
        alert("Touche entrée pressée")
    }
})

function getLineNumber(array) {
    return array.length
}

console.log(getLineNumber($("tr")))

function getValue (elem){
    return elem.val()
}

$('#radioAddBtn').click(() => {
    $('#radioDiv')[0].innerHTML += `<label for="` + $('#radioAdd').val() + `">` +$('#radioAdd').val() + `</label><input type="radio" name="radio" value="` + $('#radioAdd').val() + `">`
})

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

console.log(getOffset(document.querySelector("#array")))

function upper (item) {
    item.css("text-transform", "uppercase")
}

document.querySelector("#areatest").addEventListener("input", () => {
    alert("quelquechose est saisi")
})

$('#array tr td').eq(4).remove()

function changeBtnText (item, text) {
    item.text(text)
}

function addEntry (select, ...entry) {
    for (entri of entry) {
        const option = document.createElement("option")
        option.innerHTML = entri
        select.appendChild(option)
    }
}

function defineBack (elem, color) {
    elem.css("background-color", color)
}

function removeAllLines (table) {
    for (let i=1; i < table.children.length ; i++) {
        table.children.remove()
    }
}

function getListValue (list) {
    return list.val()
}

function deactivLink (link) {
    link.removeAttribute("src")
}

$(".changeclass")[0].classList = "classChanged"

$('.changeclass').addClass("classaded")

function childrenNumber (el) {
    i=0
    for (elem in el){
       i++
    }
    return i
}

$('#filter').keypress((e) => {
    if (e.key === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0" || "."){
        $('#filter')[0].value += e.key
    }else {
        return
    }
})


console.log($('script')[0].src)

function deletespecificline (array, lineIndex) {
    array.eq(lineIndex).remove()
}

function defineTextValue (input, text) {
    input.val(text)
}

function defineTextHtml (elem,text) {
    elem.text(text)
}

function returnClass (el) {
    return el.classList
}

function removeDisabled (el) {
    el.removeAttribute("disabled")
}

function getWidth (el) {
    return el.width()
}

function hoverAnimation (el) {
    el.addEventListener("hover", function () {
        this.style.transform = "rotate(20deg)"
    })
}

function getAllValue(el) {
    let allvalue = [];
    for (elem of el.children) {
        allvalue.push(elem.val())
    }
    return allvalue
}

function setAttr(el,attr,value) {
    el.attr(attr,value)
}

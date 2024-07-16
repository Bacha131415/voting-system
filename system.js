let on = () => {
    document.getElementById("input").style.backgroundColor = "white"
    document.getElementById("input").style.color = "black"
}
let off = () =>{
    document.getElementById("input").style.backgroundColor = "black"
    document.getElementById("input").style.color = "black"
}

let pakistan = 0
let pukhtoonistan = 0
let g_afghanistan = 0
let pak_count = () => {
    pakistan += 1
    document.getElementById("input").innerText = "Pakistan"

}
let puk_count = () => {
    pukhtoonistan += 1
    document.getElementById("input").innerText = "Pukhtoonistan"
}
let afg_count = () => {
    g_afghanistan += 1
    document.getElementById("input").innerText = "Greater Afghanistan"
}
let result = () =>{
    if (pakistan > pukhtoonistan){
        if (pakistan > g_afghanistan){
            document.getElementById("input").innerText = "Pakistan is Winner and Pakistan has taken total " + pakistan + " Votes"
        }
    }
    else if (g_afghanistan > pukhtoonistan){
        document.getElementById("input").innerText = "Greater Afghanistan is Winner and Greater Afghanistan has taken total " + g_afghanistan + " Votes"

    }
    else{
        document.getElementById("input").innerText = "Pukhtoonistan is Winner and Pukhtoonistan has taken total " + pukhtoonistan + " Votes"
    }
    
}

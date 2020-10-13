// switch selected base on button click
document.getElementById("switch-base").addEventListener("click", e => {
    const sbase = document.getElementById("source-base")
    const tbase = document.getElementById("target-base")

    const temp = sbase.value
    sbase.value = tbase.value
    tbase.value = temp
})
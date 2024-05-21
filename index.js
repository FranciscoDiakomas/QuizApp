window.onload = function () {
    function r1() {
        let pergunta = " Algoritmos são:"
        let a = "A)  Instruções lógicas e finitas"
        let b = "B)  Programas a se seguir"
        let c = "C)  Passos a se seguir"
        let d = "D)  Sequência de comandos"
        document.getElementById("a").textContent = a
        document.getElementsByClassName("pergunta")[0].textContent = pergunta
        document.getElementById("b").textContent = b
        document.getElementById("c").textContent = c
        document.getElementById("d").textContent = d
        let op = document.querySelectorAll(".resposta")
        op.forEach(item => {
            item.addEventListener("click", () => {
                if (item.textContent == a) {
                    document.getElementsByClassName("status")[0].textContent = "Resposta Certa"
                } else {
                    document.getElementsByClassName("status")[0].textContent = "Resposta Errada"
                }
            })
        })
        
    }
      function r2() {
        let pergunta = "Oque é uma variável:"
        let a = "A)  Memória de armazenamento"
        let b = "B)  Espaço físico"
        let c = "C)  Passos a se seguir"
        let d = "D)  Sequência de comandos"
        document.getElementById("a").textContent = a
        document.getElementsByClassName("pergunta")[0].textContent = pergunta
        document.getElementById("b").textContent = b
        document.getElementById("c").textContent = c
        document.getElementById("d").textContent = d
        let op = document.querySelectorAll(".resposta")
        op.forEach(item => {
            item.addEventListener("click", () => {
                if (item.textContent == a) {
                    document.getElementsByClassName("status")[0].textContent = "Resposta Certa"
                } else {
                    document.getElementsByClassName("status")[0].textContent = "Resposta Errada"
                }
            })
        })
        
    }
    r1()
}
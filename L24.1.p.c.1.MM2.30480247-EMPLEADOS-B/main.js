class Trabajador{
    constructor(nombre, sueldo, cargo){
        this.nombre = nombre,
        this.sueldo = sueldo,
        this.cargo = cargo
    }
}

class Empresa{
    constructor(){
        this.total_nomina_pagada = 0
    }
    procesartrabajador(e){
        if(e.cargo == "Obrero"){
            e.sueldo += e.sueldo * 0.20
        }else if(e.cargo == "Administrativo"){
            e.sueldo += e.sueldo * 0.10
        }
        this.total_nomina_pagada += e.sueldo
    }
}

let trabajador1 = new Trabajador('Juan', 100, "Obrero")
let trabajador2 = new Trabajador('Ana', 120, "Obrero")
let trabajador3 = new Trabajador('Lin', 200, "Administrativo")
let trabajador4 = new Trabajador('Mary', 50, "Obrero")
let trabajador5 = new Trabajador('Carlos', 150, "Administrativo")


let empresa = new Empresa()

empresa.procesartrabajador(trabajador1)
empresa.procesartrabajador(trabajador2)
empresa.procesartrabajador(trabajador3)
empresa.procesartrabajador(trabajador4)
empresa.procesartrabajador(trabajador5)


let salida = document.getElementById('salida')
salida.innerHTML = `

${trabajador1.nombre} tendra un sueldo de: ${trabajador1.sueldo}$<br>
${trabajador2.nombre} tendra un sueldo  de: ${trabajador2.sueldo}$<br>
${trabajador3.nombre} tendra un sueldo  de: ${trabajador3.sueldo}$<br>
${trabajador4.nombre} tendra un sueldo  de: ${trabajador4.sueldo}$<br>
${trabajador5.nombre} tendra un sueldo  de: ${trabajador5.sueldo}$<br><br>


El total del sueldo que debe pagar la empresa: $${empresa.total_nomina_pagada}

`
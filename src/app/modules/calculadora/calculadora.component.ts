import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
    
    forma: FormGroup;


  constructor( private fb: FormBuilder) {
        this.crearFormulario();
        this.acomoda(this.forma.get('papelAncho').value, this.forma.get('papelLargo').value, 'H','H' );
   }

  ngOnInit(): void {
  }

  crearFormulario(){
      this.forma = this.fb.group({
          papelAncho    :['100',[Validators.required]],
          papelLargo    :['70',[Validators.required]],
          corteAncho    :['21',[Validators.required]],
          corteLargo    :['28',[Validators.required]],
          cortesDeseados:['1000',[Validators.required]],
      });
  }

  maximo(){

  }


  acomoda(ladoMayorPliego: number, ladorMenorPliego: number, orientacionCorte: string, orientacionPapel: string) {
    
    
    let corteAncho : number = this.forma.get('corteAncho').value; //$("#corte_ancho")["val"]();
    let corteLargo : number = this.forma.get('corteLargo').value;//$("#corte_largo")["val"]();
    let corteMayor : number = 1;
    let corteMenor : number = 1;
    let medidaMayorPliego : number = 1;
    let medidaMenorPliego : number = 1;
    if (orientacionPapel === "V") {
        medidaMayorPliego = Math.min(ladoMayorPliego, ladorMenorPliego);
        medidaMenorPliego = Math.max(ladoMayorPliego, ladorMenorPliego)
    } else {
        if (orientacionPapel === "H") {
            medidaMayorPliego = Math.max(ladoMayorPliego, ladorMenorPliego);
            medidaMenorPliego = Math.min(ladoMayorPliego, ladorMenorPliego)
        } else {
            medidaMayorPliego = ladoMayorPliego;
            medidaMenorPliego = ladorMenorPliego
        }
    };
    if (orientacionCorte === "H") {
        corteMayor = Math.max(corteAncho, corteLargo);
        corteMenor = Math.min(corteAncho, corteLargo)
    } else {
        if (orientacionCorte === "V") {
            corteMayor = Math.min(corteAncho, corteLargo);
            corteMenor = Math.max(corteAncho, corteLargo)
        } else {
            corteMayor = corteAncho;
            corteMenor = corteLargo
        }
    };
    let cortesTotales: number = Math.trunc(medidaMayorPliego / corteMayor) * Math.trunc(medidaMenorPliego / corteMenor);
    let cortesVerticales: number = Math.trunc(medidaMayorPliego / corteMayor);
    let cortesHorizontales: number = Math.trunc(medidaMenorPliego / corteMenor);
    let sobranteVertical: number = parseFloat((medidaMayorPliego - (cortesVerticales * corteMayor))["toFixed"](2));
    let sobranteHorizontal: number = parseFloat((medidaMenorPliego - (cortesHorizontales * corteMenor))["toFixed"](2));
    let areaUsada: number = parseFloat(((corteMayor * corteMenor) * (Math.trunc(medidaMayorPliego / corteMayor)) * (Math.trunc(medidaMenorPliego / corteMenor)))["toFixed"](2));
    let e = {
        cortesT: cortesTotales,
        cortesB: cortesVerticales,
        cortesH: cortesHorizontales,
        sobranteB: sobranteVertical,
        sobranteH: sobranteHorizontal,
        areaUtilizada: areaUsada
    };
    console.log(e);
    return e
}


/*

var orientacion = "Horizontal";
var no_total_cortes;

orientacion_v(){

    if (validarForma() === 1) {
        orientacion = "Vertical";
        var ladoMayorPliego = Math.max($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var ladoMenorPliego = Math.min($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var corteAncho = $("#corte_ancho")["val"]();
        var corteLargo = $("#corte_largo")["val"]();
        var escala = 250 / ladoMayorPliego;
        var vectorAcomoda, vectorAuxiliar1Acomoda;
        var acumuladorCortesTotales;
        var g, f = 0;
        clearCanvas();
        $("#micanvas")["attr"]({  // modificamos los atributos del un objeto html
            width: ladoMenorPliego * escala, // valores para poder dibujar el tamaño del pliego de papel
            height: ladoMayorPliego * escala,
            style: "background-color:#ddd;"
        });
        vectorAcomoda = acomoda(ladoMayorPliego, ladoMenorPliego, "N", "V");
        acumuladorCortesTotales = vectorAcomoda["cortesT"];
        dibujaCuadricula(vectorAcomoda["cortesB"], vectorAcomoda["cortesH"], corteAncho, corteLargo, 0, 0, escala);
        if (vectorAcomoda["sobranteB"] >= corteLargo) {
            vectorAuxiliar1Acomoda = acomoda(vectorAcomoda["sobranteB"], ladoMayorPliego, "H", "H");
            acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
            dibujaCuadricula(vectorAuxiliar1Acomoda["cortesH"], vectorAuxiliar1Acomoda["cortesB"], corteLargo, corteAncho, vectorAcomoda["cortesB"] * corteAncho * escala, 0, escala, "R")
        } else {
            if (vectorAcomoda["sobranteH"] >= corteAncho) {
                k = acomoda(vectorAcomoda["sobranteH"], ladoMenorPliego, "H", "H");
                acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                dibujaCuadricula(vectorAuxiliar1Acomoda["cortesB"], vectorAuxiliar1Acomoda["cortesH"], corteLargo, corteAncho, 0, vectorAcomoda["cortesH"] * corteLargo * escala, escala, "R")
            } else {
                k = {
                    cortesT: 0,
                    cortesB: 0,
                    cortesH: 0,
                    sobranteB: 0,
                    sobranteH: 0,
                    areaUtilizada: 0
                }
            }
        };

        $(this)["addClass"]("disabled");
        $("#orientacion_h")["removeClass"]("disabled");
        if (parseInt(corteAncho) < parseInt(corteLargo)) {
            g = vectorAcomoda["cortesT"];
            f = vectorAuxiliar1Acomoda["cortesT"]
        } else {
            g = vectorAuxiliar1Acomoda["cortesT"];
            f = vectorAcomoda["cortesT"]
        };
        calcularArea(ladoMayorPliego, ladoMenorPliego, corteAncho, corteLargo, acumuladorCortesTotales);
        calcular(ladoMayorPliego, ladoMenorPliego, g, f, acumuladorCortesTotales, vectorAcomoda["cortesT"], "V")
    }

}

orientacion_h(){
    
    if (validarForma() === 1) {
        orientacion = "Horizontal";
        var ladoMayorPliego = Math.max($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var ladoMenorPliego = Math.min($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var corteAncho = $("#corte_ancho")["val"]();
        var corteLargo = $("#corte_largo")["val"]();
        var escala = 250 / ladoMayorPliego;
        var vectorAcomoda, vectorAuxiliar1Acomoda;
        var acumuladorCortesTotales;
        var g, f = 0;
        clearCanvas();
        $("#micanvas")["attr"]({
            width: ladoMayorPliego * escala,
            height: ladoMenorPliego * escala,
            style: "background-color:#ddd;"
        });
        vectorAcomoda = acomoda(ladoMayorPliego, ladoMenorPliego, "N", "H");
        acumuladorCortesTotales = vectorAcomoda["cortesT"];
        dibujaCuadricula(vectorAcomoda["cortesB"], vectorAcomoda["cortesH"], corteAncho, corteLargo, 0, 0, escala);
        if (vectorAcomoda["sobranteB"] >= corteLargo) {
            vectorAuxiliar1Acomoda = acomoda(vectorAcomoda["sobranteB"], ladoMenorPliego, "H", "H");
            acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
            dibujaCuadricula(vectorAuxiliar1Acomoda["cortesH"], vectorAuxiliar1Acomoda["cortesB"], corteLargo, corteAncho, vectorAcomoda["cortesB"] * corteAncho * escala, 0, escala, "R")
        } else {
            if (vectorAcomoda["sobranteH"] >= corteAncho) {
                vectorAuxiliar1Acomoda = acomoda(vectorAcomoda["sobranteH"], ladoMayorPliego, "H", "H");
                acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                dibujaCuadricula(vectorAuxiliar1Acomoda["cortesB"], vectorAuxiliar1Acomoda["cortesH"], corteLargo, corteAncho, 0, vectorAcomoda["cortesH"] * corteLargo * escala, escala, "R")
            } else {
                vectorAuxiliar1Acomoda = {
                    cortesT: 0,
                    cortesB: 0,
                    cortesH: 0,
                    sobranteB: 0,
                    sobranteH: 0,
                    areaUtilizada: 0
                }
            }
        };
        $(this)["addClass"]("disabled");
        $("#orientacion_v")["removeClass"]("disabled");
        if (parseInt(corteAncho) < parseInt(corteLargo)) {
            g = vectorAcomoda["cortesT"];
            f = vectorAuxiliar1Acomoda["cortesT"]
        } else {
            g = vectorAuxiliar1Acomoda["cortesT"];
            f = vectorAcomoda["cortesT"]
        };
        calcularArea(ladoMayorPliego, ladoMenorPliego, corteAncho, corteLargo, acumuladorCortesTotales);
        calcular(ladoMayorPliego, ladoMenorPliego, g, f, acumuladorCortesTotales, vectorAcomoda["cortesT"], "H")
    }
}

maximo(){
    if (validarForma() === 1) {
        orientacion = "Maximo";
        var ladoMayorPliego = Math.max($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var ladoMenorPliego = Math.min($("#papel_ancho")["val"](), $("#papel_largo")["val"]());
        var ladoMayorCorte = Math.max($("#corte_ancho")["val"](), $("#corte_largo")["val"]());
        var ladoMenorCorte = Math.min($("#corte_ancho")["val"](), $("#corte_largo")["val"]());
        var escala = 250 / ladoMayorPliego;
        var n = ladoMenorPliego;
        var m = ladoMayorPliego;
        var p, o, u = 0;
        var s, t;
        var acumuladorCortesTotales ;
        var q, r = {
            a1b: "",
            a2b: "",
            a1h: "",
            a2h: "",
            sumaCortes: ""
        };
        clearCanvas();
        $("#micanvas")["attr"]({
            width: ladoMayorPliego * escala,
            height: ladoMenorPliego * escala,
            style: "background-color:#ddd;"
        });
        $("#orientacion_v")["removeClass"]("disabled");
        $("#orientacion_h")["removeClass"]("disabled");
        var vectorAcomoda = acomoda(ladoMayorPliego, ladoMenorPliego, "H", "M");
        acumuladorCortesTotales = vectorAcomoda["cortesT"];
        q = {
            a1b: ladoMayorPliego,
            a2b: ladoMayorPliego,
            a1h: ladoMenorPliego,
            a2h: 0,
            sumaCortes: acumuladorCortesTotales,
            cortesH1: vectorAcomoda["cortesH"],
            cortesB1: vectorAcomoda["cortesB"],
            cortesT1: vectorAcomoda["cortesT"],
            cortesH2: 0,
            cortesB2: 0,
            cortesT2: 0
        };
        for (x = 0; x <= vectorAcomoda["cortesH"]; x++) {
            o = ladoMayorPliego;
            p = parseFloat(((ladoMenorCorte * x) + vectorAcomoda["sobranteH"])["toFixed"](2));
            n = parseFloat((ladoMenorPliego - p)["toFixed"](2));
            s = acomoda(m, n, "H", "N");
            t = acomoda(o, p, "V", "N");
            u = s["cortesT"] + t["cortesT"];
            if (u > acumuladorCortesTotales) {
                acumuladorCortesTotales = u;
                q = {
                    a1b: m,
                    a2b: o,
                    a1h: n,
                    a2h: p,
                    sumaCortes: acumuladorCortesTotales,
                    cortesH1: s["cortesH"],
                    cortesB1: s["cortesB"],
                    cortesT1: s["cortesT"],
                    cortesH2: t["cortesH"],
                    cortesB2: t["cortesB"],
                    cortesT2: t["cortesT"]
                }
            }
        };
        acumuladorCortesTotales = vectorAcomoda["cortesT"];
        r = {
            a1b: ladoMayorPliego,
            a2b: 0,
            a1h: ladoMenorPliego,
            a2h: ladoMenorPliego,
            sumaCortes: acumuladorCortesTotales,
            cortesH: acumuladorCortesTotales,
            cortesV: 0
        };
        for (x = 0; x <= vectorAcomoda["cortesB"]; x++) {
            p,
            n = ladoMenorPliego;o = parseFloat(((ladoMayorCorte * x) + vectorAcomoda["sobranteB"])["toFixed"](2));m = parseFloat((ladoMayorPliego - o)
                ["toFixed"](2));s = acomoda(m, n, "H", "N");t = acomoda(o, p, "V", "N");u = s["cortesT"] + t["cortesT"];
            if (u > acumuladorCortesTotales) {
                acumuladorCortesTotales = u;
                r = {
                    a1b: m,
                    a2b: o,
                    a1h: n,
                    a2h: p,
                    sumaCortes: acumuladorCortesTotales,
                    cortesH1: s["cortesH"],
                    cortesB1: s["cortesB"],
                    cortesT1: s["cortesT"],
                    cortesH2: t["cortesH"],
                    cortesB2: t["cortesB"],
                    cortesT2: t["cortesT"]
                }
            }
        };
        if (r["sumaCortes"] > q["sumaCortes"]) {
            calcularArea(ladoMayorPliego, ladoMenorPliego, ladoMayorCorte, ladoMenorCorte, r["sumaCortes"]);
            calcular(ladoMayorPliego, ladoMenorPliego, r["cortesT2"], r["cortesT1"], parseInt(r["sumaCortes"]), r["sumaCortes"], "M");
            dibujaCuadricula(r["cortesB1"], r["cortesH1"], ladoMayorCorte, ladoMenorCorte, 0, 0, escala);
            dibujaCuadricula(r["cortesB2"], r["cortesH2"], ladoMenorCorte, ladoMayorCorte, r["cortesB1"] * ladoMayorCorte * escala, 0, escala)
        } else {
            calcularArea(ladoMayorPliego, ladoMenorPliego, ladoMayorCorte, ladoMenorCorte, q["sumaCortes"]);
            calcular(ladoMayorPliego, ladoMenorPliego, q["cortesT2"], q["cortesT1"], q["sumaCortes"], parseInt(q["sumaCortes"]), "M");
            dibujaCuadricula(q["cortesB1"], q["cortesH1"], ladoMayorCorte, ladoMenorCorte, 0, 0, escala);
            dibujaCuadricula(q["cortesB2"], q["cortesH2"], ladoMenorCorte, ladoMayorCorte, 0, q["cortesH1"] * ladoMenorCorte * escala, escala)
        }
    }
}
    
metodoReset(){
    clearCanvas();
    reset()
}
    


calcular(ladoMayorPliego, ladoMenorPliego, cortesVerticales, cortesHorizontales, unidadesPorPliego, cantidadPorPliego, orientacion) {
    var cortesDeseados = $("#cortes_deseados")["val"]();
    var L = 1;
    var cantDePliegos = 0;
    if (orientacion === "H") {
        cantDePliegos = Math["ceil"](cortesDeseados / cantidadPorPliego)
    } else {
        if (orientacion === "V") {
            cantDePliegos = Math["ceil"](cortesDeseados / cantidadPorPliego)
        } else {
            cantDePliegos = Math["ceil"](cortesDeseados / unidadesPorPliego)
        }
    };
    if (cantDePliegos !== 0 && !isNaN(cantDePliegos)) {
        L = cantDePliegos
    } else {
        if (isNaN(cantDePliegos)) {
            cantDePliegos = 0
        }
    };
    no_total_cortes = unidadesPorPliego * cantDePliegos;
    imprimirResultados(unidadesPorPliego, cantDePliegos, no_total_cortes, cortesHorizontales, cortesVerticales, cantidadPorPliego)
}


clearCanvas() {
    var X = document["getElementById"]("micanvas");
    var Y = X["getContext"]("2d");
    Y["clearRect"](0, 0, X["width"], X["height"])
}

calcularArea(ladoMayorPliego, ladoMenorPliego, corteAncho, corteLargo, cortesTotales) {
    var areaPliego = ladoMayorPliego * ladoMenorPliego;
    var areaCorte = corteAncho * corteLargo;
    var areaTotalCorte = cortesTotales * areaCorte;
    var areaUtilizada = ((areaTotalCorte * 100) / areaPliego)["toFixed"](2);
    var areaInutilizada = (100 - areaUtilizada)["toFixed"](2);
    $("#area_utilizada")["text"](areaUtilizada);
    $("#area_inutilizada")["text"](areaInutilizada)
}

imprimirResultados(cortesTotales, cantPliegos, cortesPorPliego, cortesHorizontales, cortesVerticales, cortesUtilizables) {
    $("#cortes_pliego")["text"](cortesTotales);
    $("#cortes_utilizables")["text"](cortesUtilizables);
    $("#pliegos")["text"](cantPliegos);
    $("#numero_cortes")["text"](cortesPorPliego);
    $("#numero_cortes_vertical")["text"](cortesVerticales);
    $("#numero_cortes_horizontal")["text"](cortesHorizontales)
}

validarForma() {
    var bk = 1;
    if ($("#papel_ancho")["val"]() === "") {
        bk = 0
    };
    if ($("#papel_largo")["val"]() === "") {
        bk = 0
    };
    if ($("#corte_largo")["val"]() === "") {
        bk = 0
    };
    if ($("#corte_ancho")["val"]() === "") {
        bk = 0
    };
    if ($("#papel_ancho")["val"]() > 125 || $("#papel_largo")["val"]() > 125) {
        bk = 0;
        alert("Elvalormáximoparaanchoy/olargoesde125cm.")
    };
    return bk
}

reset() {
    $("#papel_ancho")["val"]("");
    $("#papel_largo")["val"]("");
    $("#corte_ancho")["val"]("");
    $("#corte_largo")["val"]("");
    $("#cortes_deseados")["val"]("")
}

dibujaCuadricula(be, bf, bh, bg, ba, bc, i, Z) {
    if (Z === "R") {
        Z = "#d9534f"
    } else {
        Z = "#286090"
    };
    var X = document["getElementById"]("micanvas");
    var Y = X["getContext"]("2d");
    var bd = bc;
    var bb = ba;
    bh = i * bh;
    bg = i * bg;
    for (x = 1; x <= be; x++) {
        bc = bd;
        for (y = 1; y <= bf; y++) {
            Y["beginPath"]();
            Y["fillStyle"] = Z;
            Y["rect"](ba, bc, bh, bg);
            Y["fill"]();
            Y["lineWidth"] = 0.5;
            Y["strokeStyle"] = "white";
            Y["stroke"]();
            bc = (bg * y) + bd
        };
        ba = (bh * x) + bb
    }
}

isInt(bj) {
    return bj % 1 === 0*/
}


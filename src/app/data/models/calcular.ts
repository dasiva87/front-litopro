export class Calcular {
    
    papelAncho: number;
    papelLargo: number;
    corteAncho: number;
    corteLargo: number;
    cortesDeseados: number;
    orientacion = "Horizontal";
    noTotalCortes: number;
    
    constructor(){
    }
    
    
    
    // organiza el tamaño del pliego y el tamaño del corte para saber cual es mayor y cual es menor.
    acomoda(
    ladoMayorPliego: number, 
    ladorMenorPliego: number, 
    orientacionCorte: string, 
    orientacionPapel: string,
    corteAncho: number,
    corteLargo:number,)
    {
        //let corteAncho: number = corteAncho; //$("#corte_ancho")["val"]();
        //let corteLargo: number = corteLargo;//$("#corte_largo")["val"]();
        let corteMayor: number = 1;
        let corteMenor: number = 1;
        let medidaMayorPliego: number = 1;
        let medidaMenorPliego: number = 1;
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
            cortesV: cortesVerticales,
            cortesH: cortesHorizontales,
            sobranteV: sobranteVertical,
            sobranteH: sobranteHorizontal,
            areaUtilizada: areaUsada
        };
        //console.log(e);
        return e
    }
    
    /*
     
    
     
    */
    orientacion_v( 
        papelAncho: number,
        papelLargo: number,
        corteAncho: number,
        corteLargo: number,
        cortesDeseados: number)
        {
        if (this.validarForma(papelAncho, papelLargo, corteAncho, corteLargo) === 1) {
            let orientacion = "Vertical";
            let ladoMayorPliego = Math.max(papelAncho, papelLargo);
            let ladoMenorPliego = Math.min(papelAncho, papelLargo);
            let escala = 250 / ladoMayorPliego;
            let vectorAcomoda = {
                cortesT: 0,
                cortesV: 0,
                cortesH: 0,
                sobranteV: 0,
                sobranteH: 0,
                areaUtilizada: 0
            };
            let vectorAuxiliar1Acomoda = {
                cortesT: 0,
                cortesV: 0,
                cortesH: 0,
                sobranteV: 0,
                sobranteH: 0,
                areaUtilizada: 0
            };
            let acumuladorCortesTotales: number;
            let g = 0;
            let f = 0;
            /*this.clearCanvas();
            $("#micanvas")["attr"]({  // modificamos los atributos del un objeto html
                width: ladoMenorPliego * escala, // valores para poder dibujar el tamaño del pliego de papel
                height: ladoMayorPliego * escala,
                style: "background-color:#ddd;"
            });*/
    
            vectorAcomoda = this.acomoda(ladoMayorPliego, ladoMenorPliego, "N", "V", corteAncho, corteLargo);
            acumuladorCortesTotales = vectorAcomoda["cortesT"];
            //dibujaCuadricula(vectorAcomoda["cortesV"], vectorAcomoda["cortesH"], corteAncho, corteLargo, 0, 0, escala);
    
            let k;
    
            if (vectorAcomoda["sobranteV"] >= corteLargo) {
                vectorAuxiliar1Acomoda = this.acomoda(vectorAcomoda["sobranteV"], ladoMayorPliego, "H", "H", corteAncho, corteLargo);
                acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                //dibujaCuadricula(vectorAuxiliar1Acomoda["cortesH"], vectorAuxiliar1Acomoda["cortesV"], corteLargo, corteAncho, vectorAcomoda["cortesV"] * corteAncho * escala, 0, escala, "R")
            } else {
                if (vectorAcomoda["sobranteH"] >= corteAncho) {
                    k = this.acomoda(vectorAcomoda["sobranteH"], ladoMenorPliego, "H", "H",corteAncho, corteLargo);
                    acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                    //dibujaCuadricula(vectorAuxiliar1Acomoda["cortesV"], vectorAuxiliar1Acomoda["cortesH"], corteLargo, corteAncho, 0, vectorAcomoda["cortesH"] * corteLargo * escala, escala, "R")
                } else {
                    k = {
                        cortesT: 0,
                        cortesV: 0,
                        cortesH: 0,
                        sobranteV: 0,
                        sobranteH: 0,
                        areaUtilizada: 0
                    }
                }
            };
    
            //$(this)["addClass"]("disabled");
            //$("#orientacion_h")["removeClass"]("disabled");
    
            if (corteAncho < corteLargo) {
                g = vectorAcomoda["cortesT"];
                f = vectorAuxiliar1Acomoda["cortesT"]
            } else {
                g = vectorAuxiliar1Acomoda["cortesT"];
                f = vectorAcomoda["cortesT"]
            };
    
            //this.calcularArea(ladoMayorPliego, ladoMenorPliego, corteAncho, corteLargo, acumuladorCortesTotales);
            this.calcular(ladoMayorPliego, ladoMenorPliego, g, f, acumuladorCortesTotales, vectorAcomoda["cortesT"], "V", cortesDeseados)
        }
    
    }
    
    orientacion_h( 
        papelAncho: number,
        papelLargo: number,
        corteAncho: number,
        corteLargo: number,
        cortesDeseados: number)
        {
    
        if (this.validarForma(papelAncho, papelLargo, corteAncho, corteLargo) === 1) {
            let orientacion = "Horizontal";
            let ladoMayorPliego = Math.max(papelAncho, papelLargo);
            let ladoMenorPliego = Math.min(papelAncho, papelLargo);
            let escala = 250 / ladoMayorPliego;
            let vectorAcomoda;
            let vectorAuxiliar1Acomoda;
            let acumuladorCortesTotales;
            let g = 0;
            let f = 0;
    
            /*clearCanvas();
            $("#micanvas")["attr"]({
                width: ladoMayorPliego * escala,
                height: ladoMenorPliego * escala,
                style: "background-color:#ddd;"
            });*/
    
            vectorAcomoda = this.acomoda(ladoMayorPliego, ladoMenorPliego, "N", "H", corteAncho, corteLargo);
            acumuladorCortesTotales = vectorAcomoda["cortesT"];
    
            //dibujaCuadricula(vectorAcomoda["cortesV"], vectorAcomoda["cortesH"], corteAncho, corteLargo, 0, 0, escala);
    
            if (vectorAcomoda["sobranteV"] >= corteLargo) {
                vectorAuxiliar1Acomoda = this.acomoda(vectorAcomoda["sobranteV"], ladoMenorPliego, "H", "H", corteAncho, corteLargo);
                acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                //dibujaCuadricula(vectorAuxiliar1Acomoda["cortesH"], vectorAuxiliar1Acomoda["cortesV"], corteLargo, corteAncho, vectorAcomoda["cortesV"] * corteAncho * escala, 0, escala, "R")
            } else {
                if (vectorAcomoda["sobranteH"] >= corteAncho) {
                    vectorAuxiliar1Acomoda = this.acomoda(vectorAcomoda["sobranteH"], ladoMayorPliego, "H", "H", corteAncho, corteLargo);
                    acumuladorCortesTotales += vectorAuxiliar1Acomoda["cortesT"];
                    //dibujaCuadricula(vectorAuxiliar1Acomoda["cortesV"], vectorAuxiliar1Acomoda["cortesH"], corteLargo, corteAncho, 0, vectorAcomoda["cortesH"] * corteLargo * escala, escala, "R")
                } else {
                    vectorAuxiliar1Acomoda = {
                        cortesT: 0,
                        cortesV: 0,
                        cortesH: 0,
                        sobranteV: 0,
                        sobranteH: 0,
                        areaUtilizada: 0
                    }
                }
            };
    
            // $(this)["addClass"]("disabled");
            //$("#orientacion_v")["removeClass"]("disabled");
    
            if (corteAncho < corteLargo) {
                g = vectorAcomoda["cortesT"];
                f = vectorAuxiliar1Acomoda["cortesT"]
            } else {
                g = vectorAuxiliar1Acomoda["cortesT"];
                f = vectorAcomoda["cortesT"]
            };
            //this.calcularArea(ladoMayorPliego, ladoMenorPliego, corteAncho, corteLargo, acumuladorCortesTotales);
            this.calcular(ladoMayorPliego, ladoMenorPliego, g, f, acumuladorCortesTotales, vectorAcomoda["cortesT"], "H", cortesDeseados)
        }
    }
    
    maximo( 
    papelAncho: number,
    papelLargo: number,
    corteAncho: number,
    corteLargo: number,
    cortesDeseados: number)
    {
        if (this.validarForma(papelAncho, papelLargo, corteAncho, corteLargo) === 1) {
            let orientacion = "Maximo";
            let ladoMayorPliego = Math.max(papelAncho, papelLargo);
            let ladoMenorPliego = Math.min(papelAncho, papelLargo);
            let ladoMayorCorte = Math.max(corteAncho, corteLargo);
            let ladoMenorCorte = Math.min(corteAncho, corteLargo);
            let escala = 250 / ladoMayorPliego;
            let n = ladoMenorPliego;
            let m = ladoMayorPliego;
            let p, o, u = 0;
            let s, t;
            let acumuladorCortesTotales;
            let q, r;
            /*clearCanvas();
            $("#micanvas")["attr"]({
                width: ladoMayorPliego * escala,
                height: ladoMenorPliego * escala,
                style: "background-color:#ddd;"
            });
            $("#orientacion_v")["removeClass"]("disabled");
            $("#orientacion_h")["removeClass"]("disabled");*/
            var vectorAcomoda = this.acomoda(ladoMayorPliego, ladoMenorPliego, "H", "M", corteAncho, corteLargo);
            acumuladorCortesTotales = vectorAcomoda["cortesT"];
            q = {
                a1b: ladoMayorPliego,
                a2b: ladoMayorPliego,
                a1h: ladoMenorPliego,
                a2h: 0,
                sumaCortes: acumuladorCortesTotales,
                cortesH1: vectorAcomoda["cortesH"],
                cortesV1: vectorAcomoda["cortesV"],
                cortesT1: vectorAcomoda["cortesT"],
                cortesH2: 0,
                cortesV2: 0,
                cortesT2: 0
            };
            for (let x = 0; x <= vectorAcomoda["cortesH"]; x++) {
                o = ladoMayorPliego;
                p = parseFloat(((ladoMenorCorte * x) + vectorAcomoda["sobranteH"])["toFixed"](2));
                n = parseFloat((ladoMenorPliego - p)["toFixed"](2));
                s = this.acomoda(m, n, "H", "N", corteAncho, corteLargo);
                t = this.acomoda(o, p, "V", "N", corteAncho, corteLargo);
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
                        cortesV1: s["cortesV"],
                        cortesT1: s["cortesT"],
                        cortesH2: t["cortesH"],
                        cortesV2: t["cortesV"],
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
            for (let x = 0; x <= vectorAcomoda["cortesV"]; x++) {
                let p,
                    n = ladoMenorPliego; o = parseFloat(((ladoMayorCorte * x) + vectorAcomoda["sobranteV"])["toFixed"](2)); m = parseFloat((ladoMayorPliego - o)
                    ["toFixed"](2)); s = this.acomoda(m, n, "H", "N", corteAncho, corteLargo); t = this.acomoda(o, p, "V", "N", corteAncho, corteLargo); u = s["cortesT"] + t["cortesT"];
                if (u > acumuladorCortesTotales) {
                    acumuladorCortesTotales = u;
                    r = {
                        a1b: m,
                        a2b: o,
                        a1h: n,
                        a2h: p,
                        sumaCortes: acumuladorCortesTotales,
                        cortesH1: s["cortesH"],
                        cortesV1: s["cortesV"],
                        cortesT1: s["cortesT"],
                        cortesH2: t["cortesH"],
                        cortesV2: t["cortesV"],
                        cortesT2: t["cortesT"]
                    }
                }
            };
            if (r["sumaCortes"] > q["sumaCortes"]) {
                //this.calcularArea(ladoMayorPliego, ladoMenorPliego, ladoMayorCorte, ladoMenorCorte, r["sumaCortes"]);
                this.calcular(ladoMayorPliego, ladoMenorPliego, r["cortesT2"], r["cortesT1"], parseInt(r["sumaCortes"]), r["sumaCortes"], "M", cortesDeseados);
                //dibujaCuadricula(r["cortesV1"], r["cortesH1"], ladoMayorCorte, ladoMenorCorte, 0, 0, escala);
                //dibujaCuadricula(r["cortesV2"], r["cortesH2"], ladoMenorCorte, ladoMayorCorte, r["cortesV1"] * ladoMayorCorte * escala, 0, escala)

            } else {
                //this.calcularArea(ladoMayorPliego, ladoMenorPliego, ladoMayorCorte, ladoMenorCorte, q["sumaCortes"]);
                this.calcular(ladoMayorPliego, ladoMenorPliego, q["cortesT2"], q["cortesT1"], q["sumaCortes"], parseInt(q["sumaCortes"]), "M", cortesDeseados);
                //dibujaCuadricula(q["cortesV1"], q["cortesH1"], ladoMayorCorte, ladoMenorCorte, 0, 0, escala);
                //dibujaCuadricula(q["cortesV2"], q["cortesH2"], ladoMenorCorte, ladoMayorCorte, 0, q["cortesH1"] * ladoMenorCorte * escala, escala)

            }
        }
    }
    
    metodoReset(){
        //this.clearCanvas();
        //this.reset()
    }
    
    calcular(ladoMayorPliego: number, ladoMenorPliego: number, cortesVerticales: number, cortesHorizontales: number, unidadesPorPliego: number, cantidadPorPliego: number, orientacion: string, cortesDeseados: number) {
        let L = 1;
        let cantDePliegos = 0;
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
        let noTotalCortes = unidadesPorPliego * cantDePliegos;
        this.imprimirResultados(unidadesPorPliego, cantDePliegos, noTotalCortes, cortesHorizontales, cortesVerticales, cantidadPorPliego)
        
    }
    
    
    /*clearCanvas() {
        var X = document["getElementById"]("micanvas");
        var Y = X["getContext"]("2d");
        Y["clearRect"](0, 0, X["width"], X["height"])
    }*/
    
    calcularArea(ladoMayorPliego: number, ladoMenorPliego: number, corteAncho: number, corteLargo: number, cortesTotales: number) {
        /*var areaPliego = ladoMayorPliego * ladoMenorPliego;
        var areaCorte = corteAncho * corteLargo;
        var areaTotalCorte = cortesTotales * areaCorte;
        var areaUtilizada = ((areaTotalCorte * 100) / areaPliego)["toFixed"](2);
        var areaInutilizada = (100 - areaUtilizada)["toFixed"](2);
        $("#area_utilizada")["text"](areaUtilizada);
        $("#area_inutilizada")["text"](areaInutilizada)*/
    }
    
    imprimirResultados(cortesTotales: number, cantPliegos: number, noTotalCortes: number, cortesHorizontales: number, cortesVerticales: number, cortesUtilizables: number) {
        console.log(
            "/n totales:" + cortesTotales,
            "/n Cant pliegos: " + cantPliegos,
            "/n Total de cortes: " + noTotalCortes,
            "/n horiz: " + cortesHorizontales,
            "/n ver: " + cortesVerticales,
            "/n utilizables: " + cortesUtilizables)
        /*$("#cortes_pliego")["text"](cortesTotales);
        $("#cortes_utilizables")["text"](cortesUtilizables);
        $("#pliegos")["text"](cantPliegos);
        $("#numero_cortes")["text"](noTotalCortes);
        $("#numero_cortes_vertical")["text"](cortesVerticales);
        $("#numero_cortes_horizontal")["text"](cortesHorizontales)*/
    }
    
    validarForma(papelAncho, papelLargo, corteAncho, corteLargo) {
        let bk = 1;
        if (papelAncho === "") {
            bk = 0
        };
        if (papelLargo === "") {
            bk = 0
        };
        if (corteLargo === "") {
            bk = 0
        };
        if (corteAncho === "") {
            bk = 0
        };
        if (papelAncho > 125 || papelLargo > 125) {
            bk = 0;
            alert("El valor máxim opara ancho y/o largo es de 125cm.")
        };
        return bk
    }
    
    
        /*
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
            return bj % 1 === 0
        }*/
        
    
    
}
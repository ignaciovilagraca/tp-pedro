var Huevos=3;
var Cebolla=1;
var Papa=1;
var SumaIngredientes=5;

var TirosPorJugador=3;
var Rondas=4;

var TirosJugador1 =0;
var TirosJugador2 =0;
 var PuntajeTirosJ1=new Array(3);
 var PuntajeTirosJ2=new Array(3);

 var PuntajeRondasJ1=new Array(4);
 var PuntajeRondasJ2=new Array(4);
var AcumPuntajeJugador1=0;
var AcumPuntajeJugador2=0;
var ContadorRondas=0;
var ContadorRondasJ1=0;
var ContadorRondasJ2=0;

var NumerosEjercicio1=new Array();
var AuxMayor=0;
var AuxMenor=0;
var Divisor=0;


function TirarDados(NroJugador){

	if(NroJugador==1){
		
		Generar(NroJugador);
		var tiro1=document.getElementById("txtValorDado1J1").value;
		var tiro2=document.getElementById("txtValorDado2J1").value;
		var tiro3=document.getElementById("txtValorDado3J1").value;

		if(parseInt(tiro1)%2!=0)
		{
			AcumPuntajeJugador1=parseInt(AcumPuntajeJugador1)+parseInt(tiro1);
		}
		if(parseInt(tiro2)%2!=0)
		{
			AcumPuntajeJugador1=AcumPuntajeJugador1+parseInt(tiro2);
		}
		if(parseInt(tiro3)%2!=0)
		{
			AcumPuntajeJugador1=AcumPuntajeJugador1+parseInt(tiro3);
		}
		
		TirosJugador1=parseInt(TirosJugador1)+1;
	
		PuntajeTirosJ1[TirosJugador1-1]= AcumPuntajeJugador1;
	
		if(TirosJugador1==TirosPorJugador){
			
			document.getElementById('Jugador1').disabled=true;
			document.getElementById('Jugador2').disabled=false;
			var Acum=0;
			TirosJugador1=0;
			for(i=0;i<=2;i++){
				Acum=parseInt(Acum)+parseInt(PuntajeTirosJ1[i]);
				
			}
	
				PuntajeRondasJ1[ContadorRondasJ1]=parseInt(Acum);
	
				ContadorRondasJ1=ContadorRondasJ1+1
	
				

		
	}
}
else
{

		
		Generar(NroJugador);
		var tiro1=document.getElementById("txtValorDado1J2").value;
		var tiro2=document.getElementById("txtValorDado2J2").value;
		var tiro3=document.getElementById("txtValorDado3J2").value;
		if(parseInt(tiro1)%2!=0)
		{
			AcumPuntajeJugador2=AcumPuntajeJugador2+parseInt(tiro1);
		}
		if(parseInt(tiro2)%2!=0)
		{
			AcumPuntajeJugador2=AcumPuntajeJugador2+parseInt(tiro2);
		}
		if(parseInt(tiro3)%2!=0)
		{
			AcumPuntajeJugador2=AcumPuntajeJugador2+parseInt(tiro3);
		}

		
		TirosJugador2=parseInt(TirosJugador2)+1;
		PuntajeTirosJ2[TirosJugador2-1]= AcumPuntajeJugador2;
		
	
		
		if(TirosJugador2==TirosPorJugador){
				document.getElementById('Jugador1').disabled=false;
			document.getElementById('Jugador2').disabled=true;
			var Acum=0;
			TirosJugador2=0;
			for(i=0;i<=2;i++){
								Acum=parseInt(Acum)+parseInt(PuntajeTirosJ2[i]);
				
			}
	
				PuntajeRondasJ2[ContadorRondasJ2]=Acum;
	
				ContadorRondasJ2=ContadorRondasJ2+1
				ContadorRondas=ContadorRondas+1;
				
	}


}

if (ContadorRondas==Rondas)
{
alert("Fin del Juego");
var AcumRondasJ1=0;
var AcumRondasJ2=0;
var CadenaJugador1='<b>Puntajes Jugador 1</b><br>';
var CadenaJugador2='<b>Puntajes Jugador 2</b><br>';


for (var i = 0; i <=3; i++) {
	CadenaJugador1=CadenaJugador1+'Ronda '+parseInt(i+1)+': '+ PuntajeRondasJ1[i] +'<br>' ;	
	AcumRondasJ1=parseInt(AcumRondasJ1)+parseInt(PuntajeRondasJ1[i]);

}
CadenaJugador1=CadenaJugador1+'<b>Total: '+ AcumRondasJ1+'</b>';
for (var i = 0; i <=3; i++) {
	
	CadenaJugador2=CadenaJugador2+'Ronda '+parseInt(i+1)+': '+ PuntajeRondasJ2[i] +'<br>' ;		
	AcumRondasJ2=parseInt(AcumRondasJ2)+parseInt(PuntajeRondasJ2[i]);

}
CadenaJugador2=CadenaJugador2+'<b>Total: '+ AcumRondasJ2+'</b>';

if (AcumRondasJ1>AcumRondasJ2)
{
alert("Ganador Jugador 1");

}
else
{
	if (AcumRondasJ2>AcumRondasJ1)
{
		alert("Ganador Jugador 2");	
	}
	else
	{
		document.getElementById('Desempate').style.visibility="visible";
	}
}

document.getElementById('PuntosJ1').innerHTML=CadenaJugador1;
document.getElementById('PuntosJ2').innerHTML=CadenaJugador2;


}

}



function Generar(NroJugador){
	var num1 = Math.floor((Math.random() * (7-1))+1);
	var num2 = Math.floor((Math.random() * (7-1))+1);
	var num3 = Math.floor((Math.random() * (7-1))+1);
	if(NroJugador==1){
	document.getElementById("txtValorDado1J1").value=num1;
	document.getElementById("txtValorDado2J1").value=num2;
	document.getElementById("txtValorDado3J1").value=num3;
}
else
{

	document.getElementById("txtValorDado1J2").value=num1;
	document.getElementById("txtValorDado2J2").value=num2;
	document.getElementById("txtValorDado3J2").value=num3;	
}

}

function Desempate(){
	document.getElementById('PuntosJ1').innerHTML=CadenaJugador1;
	document.getElementById('PuntosJ2').innerHTML=CadenaJugador2;
	document.getElementById('Desempate').style.visibility="hidden";

	 TirosJugador1 =0;
	 TirosJugador2 =0;
	 PuntajeTirosJ1=new Array(3);
	 PuntajeTirosJ2=new Array(3);

	 PuntajeRondasJ1=new Array(4);
	 PuntajeRondasJ2=new Array(4);
	 AcumPuntajeJugador1=0;
	 AcumPuntajeJugador2=0;
	 ContadorRondas=0;
	 ContadorRondasJ1=0;
	 ContadorRondasJ2=0;

	
}


function CalculoTortilla()
{
	var Validado=0;
	var ValidaCarga=0;
	var SumaIngredientesCargados=0;
var CantidadTortillas=0;

while(true){	

	var EntHuevos=prompt("Cantidad de Huevos");
	if(!isNaN(EntHuevos) && EntHuevos != null && EntHuevos != ""){
		if((EntHuevos%1)==0){
			break;
		}
			else
			{
				alert("Este Valor No puede se Decimal ");
				continue;
			}

	}
	else
	{
		alert("Debe cargar Solo Numeros");
		continue;
	}
}

while(true){	

	var EntCebolla=prompt("Cantidad de Cebolla");
	if(!isNaN(EntCebolla) && EntCebolla != null && EntCebolla != ""){
		
		break;
	}
	else
	{
		alert("Debe cargar Solo Numeros");
		continue;
	}
}

while(true){	

	var EntPapa=prompt("Cantidad de Papa");
	
	if(!isNaN(EntPapa) && EntPapa != null && EntPapa != ""){
		break;
	}
	else
	{
		alert("Debe cargar Solo Numeros");
		continue;
	}
}


if (EntHuevos>=Huevos)
{
	if (EntCebolla>=Cebolla)	{

		if (EntPapa>=Papa)
		{
			Validado=1;
		}
		else
		{
			alert("La Cantidad de Papa es insuficiente");
			Validado=0;
		}
	}
		else
		{
			alert("La Cantidad de Cebolla es insuficiente");
			Validado=0;
		}

}
	else
		{
			alert("La Cantidad de Huevos es insuficiente");
			Validado=0;
		}

if(Validado==1)
{
	if (EntHuevos==Huevos)
	{
		alert("Pueden Hacerse 1 Tortilla");		
	}
	SumaIngredientesCargados=parseInt(EntHuevos)+parseFloat(EntPapa)+parseFloat(EntCebolla);
	CantidadTortillas=parseInt(parseFloat(SumaIngredientesCargados)/parseFloat(SumaIngredientes));

	alert("Pueden Hacerse "+ parseInt(CantidadTortillas)+" Tortillas");


}		


}
var Contador=1;
function CargaVector(){
	
	var Numero=prompt("Ingrese Numero");	
	while(Numero!=0){	
		
		
		if(!isNaN(Numero) && Numero != null && Numero != ""){
			if (Numero>0) {

					NumerosEjercicio1[Contador]=Numero;

				alert("Nro Correcto "+parseInt(Contador)+" Ingresado/s ");

				if (parseInt(Contador)==6){

					document.getElementById('menor').disabled = false;
					document.getElementById('mayor').disabled = false;
					document.getElementById('divisor').disabled = false;
					document.getElementById('descendente').disabled = false;
					document.getElementById('resetiar').disabled = false;

				}
				Contador=Contador+1;

			}
			else{
				
				alert("El Numero debe ser Positivo");
				
			
			
			}
		}
		else
		{
			alert("Solo deben Cargarse Numeros");
			
		}
		Numero=prompt("Ingrese Numero");
		continue
	}
return;
}


function BusquedaMenor(){


	 AuxMenor=NumerosEjercicio1[1];
	
	for(i=0;i<=NumerosEjercicio1.length;i++){
	
		if (parseInt(NumerosEjercicio1[i])<parseInt(AuxMenor)){
			AuxMenor=NumerosEjercicio1[i];

		}

	}
	document.getElementById("MenorIgresado").innerHTML='El Menor Ingresado es '+AuxMenor;
	
	

		

}

function BusquedaMayor(){


	 AuxMayor=NumerosEjercicio1[1];
	 
	for(i=0;i<=NumerosEjercicio1.length;i++){
	

		if (parseInt(NumerosEjercicio1[i])>parseInt(AuxMayor)){
			AuxMayor=NumerosEjercicio1[i];

		}

	}
	document.getElementById("MayorIngresado").innerHTML='El Mayor Ingresado es '+AuxMayor;

}

function BuscaDivisor(){
	
	if (parseInt(AuxMayor) % parseInt(AuxMenor) === 0) {
		
		document.getElementById("DivisorDeMayor").innerHTML=AuxMenor +' Es divisor de ' +AuxMayor;
		Divisor=AuxMenor;
	}
	else
	{

		for (i=1;i <= parseInt(AuxMenor); i++) {
			

if (parseInt(AuxMayor) % i === 0) {
		document.getElementById("DivisorDeMayor").innerHTML=i +' Es el divisor mas cercano de ' +AuxMayor;	
		Divisor=i;
		break;
	}
}
}
}
function Reset(){

	AuxMayor=0;
	AuxMenor=0;
	Contador=0;
	var NumerosEjercicio1=new Array();

	document.getElementById('menor').disabled = true;
	document.getElementById('mayor').disabled = true;
	document.getElementById('divisor').disabled = true;
	document.getElementById('descendente').disabled = true;
	document.getElementById('resetiar').disabled = true;
	document.getElementById("DivisorDeMayor").innerHTML="";
	document.getElementById("MayorIngresado").innerHTML="";
	document.getElementById("MenorIgresado").innerHTML="";
	document.getElementById('VectorOrdenado').innerHTML="";


}
function OrdenDescendente(){

	var VectorOrdenado=new Array();
	var Resto=0;

	
	var i=0;
	var ContadorVeces=1;
	
	while(ContadorVeces<=AuxMayor){
		Resto=parseInt(ContadorVeces%Divisor);
	
		
		if (Resto==0){

			VectorOrdenado[i]=ContadorVeces;
		
			i=i+1;
		}
		
		ContadorVeces=ContadorVeces+1;
		
	}
    
    var Cadena='Vector Ordenado<br>';
    document.getElementById('VectorOrdenado').innerHTML=Cadena;
    
	for(i=0;i<=VectorOrdenado.length-1;i++){
		Cadena=Cadena+VectorOrdenado[i]+'<br>';
		
	}
	document.getElementById('VectorOrdenado').innerHTML=Cadena;

}

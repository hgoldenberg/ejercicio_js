//Ejercicio: Mi primera Pagina JavaScript
alert ("Hola Bienvenido a este nuevo sitio que va a quedar genial pero tengan paciencia que estoy aprendiendo !!!")
user = prompt ("Como te llamas?")
alert ("Hola "+user+"!!")
edad = prompt ("Que edad tenés?")
console.log ("Bien! tenés: "+edad+" años")
alert ("Bien! "+user+" tenés "+edad+" años!!")

//Ejercicio: Calculador de Edad
alert ("Ahora seguimos con Ejercicio: Calculador de Edad")
edad = prompt ("Cuantos años tenes muchacha/o??")
calculo = edad*365
alert ("uh ya tenes vividos "+calculo+" dias!!")

//El calculador de abastecimiento de por vida
alert ("Ahora seguimos con El calculador de abastecimiento de por vida")
mi_edad=47
edad_estimada=80
snack="pringles"
snack_diario=3
snack_a_comer=((edad_estimada-mi_edad)*snack_diario*365)
precio=75
gasto=(snack_a_comer*precio)
alert("Hoy tengo 47 años")
alert ("Con suerte llego hasta los 80 años")
alert ("Mi snack favorito son las Pringles!! (de cebolla y crema)")
alert ("Me como "+snack_diario+" por dia")
alert ("Voy a necesitar "+snack_a_comer+ " snacks para que me alcancen hasta los " + edad_estimada+ " años!")
alert ("Voy a tener que ahorrar porque me voy a gastar: $"+gasto+" en Pringles!!")

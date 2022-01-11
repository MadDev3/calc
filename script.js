//кнопка добавления символов
function insert(num){
	document.form.textview.value =
	document.form.textview.value + num;
}

//кнопка очистки
function clean(){
	document.form.textview.value = "";
}

//убрать последний знак
function back(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}

//вычислить всё
function equal(){
	var exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}
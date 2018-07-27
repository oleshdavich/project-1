function MyFirstApp(name,age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа");

	function showSkills() {
	 let skills = ["PC power on ", "Excel ", "Mouse clicking"];
	 for (let i = 0; i < skills.length; i++) {
	 document.write("Я могу "+ skills[i] + "<br/");

	 }
	}

	showSkills();

	function checkAge() {
	 if (age >= 18) {
	 alert ("Отлично, скоро будешь джуниором");
	 	 } else {
	 	 alert ("Ух, еще нет 18, а уже стремишься к разработке. Молодец");

	 	 }

	}

	function calcPow(num) {
num*=num;
	}
	calcPow(4);
}
MyFirstApp("Aleksei", 30);

let student = {};

let name = prompt("Ismingizni kiriting");
let familiya = prompt("Familiyangizni kiriting");
let yosh = prompt("Yoshingizni kiritinig");
let Matematika = Number(prompt("Matematika bahoyingizni kititing"));
let inglizTili = Number(prompt("Ingliz tili bahoyingizni kititing"));
let informatika = Number(prompt("Informatika bahoyingizni kititing"));
let tarix = Number(prompt("Tarix bahoyingizni kititing"));

student.name = name;
student.familiya = familiya;
student.yosh = yosh;


student.baholar = {};
student.baholar.Matematika = Matematika;
student.baholar.inglizTili = inglizTili;
student.baholar.informatika = informatika;
student.baholar.tarix = tarix;

console.log("Ism:", student.name);
console.log("Familiya:", student.familiya);
console.log("Email:", student.name.toLowerCase() + "." + student.familiya.toLowerCase() + "@school.uz");
console.log("Tug'ilgan yili:", 2026 - student.yosh);

let ortachaBaho = (Matematika + inglizTili + informatika + tarix) / 4;
console.log("O'rtacha baho:", Math.round(ortachaBaho));

console.log(student);

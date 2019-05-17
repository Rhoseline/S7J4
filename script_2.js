
// Un prompt s'affiche avec la question suivante
"De quel nombre veut tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"

let n = prompt ("De quel nombre veut tu calculer la factorielle ?");

function factorial(n) {

let factor= 1;
for (let i=1; i<=n; i++) {
	factor *= i;
}
return factor;
}
console.log(Le factorielle de ${n} est: ${factorial(n)};

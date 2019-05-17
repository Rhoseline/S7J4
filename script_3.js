"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####

Function Pyramid(n) {
let n= prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let m= "#";
let i = 1

while (i<=n) {
    let l = "";
    for (let k = 0; k < (n-i); k++) {
        l += " "  
    }
    for (let m = 0; m < i; m++) {
        l = l + m;
    }
    i++;
    console.log(l);
}

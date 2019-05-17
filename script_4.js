cconst entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


- Q1
console.log("Va Lister les entrepreneurs qui sont nés dans les années 70")
  let svt= entrepreneurs.filter(function(entrepreneurs){
    return entrepreneurs.year >= 1970 && entrepreneurs.year < 1980;
});
console.log(svt);

-Q2
console.log("une array qui contient le prénom et le nom des entrepreneurs");
  let entrepr_name = [{}];
  entrepreneurs.forEach(entrepreneurs => {
      entrepreneurs_name.push({first: entrepreneurs.first, last: entrepreneurs.last});
  });
  console.log(entrepreneurs_name)

console.log("");

-Q3
console.log("*".repeat(100))
alert("Quel âge aurait chaque inventeur aujourd'hui ?")
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.map(a => { console.log(a.first + " " + a.last + " : " + (2019-a.year) + " ans")
});

-Q4
console.log(" Va Trier les entrepreneurs par ordre alphabétique du nom de famille.")
  let lst_name = entrepreneurs.map(({last}) => `\n${last}`).sort();
console.log(`${lst_name}`)
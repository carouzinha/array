const hobbies = ['ler','ouvir musica','jogar volei'];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[0] = 'ler livros';
console.log(hobbies);

hobbies.length;
console.log(hobbies.length);

hobbies.push('cozinhar');
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

let position = hobbies.indexOf('ouvir musica')
hobbies.splice(position, 1)
console.log(hobbies)

const hobbiesAmigo = ['cantar','dançar','musica']

const todosOsHobbies = hobbies.concat(hobbiesAmigo)

const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar','escrever histórias', 'fazer esculturas'];

Array = categoriasHobbies = ['desenhar',
'escrever histórias', 'fazer esculturas'];
console.log(categoriasHobbies[0][2]);


/**
 * Zadatak nam kaze da moramo instalirat "lodash" bibliotek na svoje racunalo.
 * Buduci da do sada nismo koristili npm instalaciju paketa, biblioteku lodash
 * cemo skinuti na svoje racunalo sa stranice "https://lodash.com/" te datoteku/biblioteku
 * "core.js" pohraniti u nas projekt.
 * Da bi mogli koristiti funkcije iz lodash biblioteke, moramu ju ucitati u nas projekt na sljedeci nacin:
 */
const { _ } = require('./core.js');

/**
 * 1. 
 *  Zadane su nam dvije varijable koje potencijalno korisnik unosi kao podatak za lozinku.
 *  U zadatku je jasno navedeno da se od korisnika trazi da koristi samo znamenke.
 *  Primjetimo da su obje varijable stavljene pod navodnike, pa moramo razmisljati da su obje
 *  varijeble postavljene kao niz karaktera, kao string, tj. nisu odmah postavljene kao brojcane vrijednosti.
 *  Brojcane vrijednosti bi bile postavljene bez navodnika, npr. var mojaVarijabla = 123;
 *  Vidjet cemo kasnije zasto ovdje napominjemo da su barijable postavljene kao string!
 */
var dobro = "1234567890";
var lose = "1123456";

/**
 * 2. 
 *  Prvi zadatak od nas trazi da napisemo funkciju u kojoj cemo provjeriti da li su svi 
 *  znakovi unutar predane lozinke jedinstveni, sto znaci ako smo predali niz znakova:
 *  npr. 12345 -> vidimo da su svi znakovi/brojevi jedinstveni, nema ponavljanja brojeva.
 *  Ukoliko predamo niz znakova:
 *  npr. 123425 -> vidimo da nam se brojka 2 ponavlja te niz ne zadovoljava nas zahtjev
 *
 *  Pisemo funkciju kojoj cemo predati "password" kao parametar.
 * 
 *  Kako cemo pokusati rijesiti ovaj zadatak, tj sto nam funkcija treba odraditi?
 *  - inicijalizirat cemo prazan niz/array u koji cemo smjestati svaku pojedinacnu znamenku u predanom nizu,
 *    a dodatno cemo jos provjeravati da li u nizu u koji smjestamo svaku pojedinu znamenku vec postoji ta
 *    znamenka, te ukoliko vec postoji vec imamo indikaciju da u predanom nizu znakova imamo ponavljanje
 *    i na taj nacin proglasavamo da nam je niz neizpravan, odnosno da nije predan niz sa jedinstvenim znakovima.
 */
var jedinstveniZnakovi = function(password) {
	// inicijaliziramo prazan niz
	var mojNiz = [];

	// koristimo "for" petlju te prolazimo kroz svako slovo/broj u "password" varijabli i postavljamo u niz 
	for(var i = 0; i <= password.length; i++){
		console.log("Sada smo na iteraciji=" + i);
		var mojChar = password.charAt(i);
		console.log("Uzimamo vrijednost charactera: " + mojChar);

		console.log("Provjeravamo da li znak=" + mojChar + " vec postoji u nasem nizu/array-u");
		if (!mojNiz.includes(mojChar))
		{
			console.log("Znak=" + mojChar + " ne postoji u nizu te ga stavljamo u nas niz!");
			mojNiz.push(mojChar);
		} 
		else 
		{
			console.log("Znak=" + mojChar + " VEC POSTOJI u nizu te nam je ovo indikacija da ne provjeravamo dalje!");
			console.log("--------------------------");
			console.log("FUNKCIJA za zadani password=" + password + " VRACA ----> FALSE");
			console.log("--------------------------");
			return false;
		}
	}

	console.log("Ovo nam je kraj nase funkcije, ukoliko je nas kod prosao do ovdje, to znaci da nismo pronasli duplikat nekog znaka!");
	console.log("--------------------------");
	console.log("FUNKCIJA za zadani password=" + password + " VRACA ----> TRUE");
	console.log("--------------------------");
	return true;
};

/**
 * 3.
 *   Zadatak nas trazi da provjerimo svaki znak u nizu i provjerimo da li je svaki znak u nizu broj. 
 *   Zadatku cemo pristupiti na slican nacin kao i prvoj funkciji, iterirat cemo po svakom znaku
 *   i provjeravati da li je znak na tom mjestu broj.
 *   Ukoliko "naletimo" na neki znak koji nije broj, izaci cemo iz petlje, tj funkcija ce vratiti false.
 *   Ukoliko za svaki znak utvrdimo da je broj, funkcija ce vratiti true.
 */
var daLiJeSvakiZnakBroj = function(password)
{
	for(var i = 0; i <= password.length; i++){
		// uzimamo svaki pojedini znak iz predane lozinke
		var mojChar = password.charAt(i);
		// buduci da smo napomenuli da predajemo password kao string, 
		// da bi provjerili da li je predani znak broj, moramo ga konvertirati u broj
		var mojBroj = Number(mojChar);
		// u prethodnoj liniji smo pokusali pretvoriti znak u broj,
		// ukoliko je to bio broj, dobit cemo broj, u suprotnom ukoliko nije bio broj
		// nasa varijabla mojBroj ce dobiti vrijednost Nan, odnostno "Not a Number"
		// pa u iducem koraku provjeravamo ako nije (!) NaN i ako je broj ispisat cemo da je 
		// znak koji provjeravamo broj, u suprotnom smo prepoznali znako koji nije broj
		// te u funkciji odmah vracamo vrijednost false jer makar jedan od znakova u passwordu nije broj! 
		// Primjetimo ovdje da smo koristili funkciju "isNaN" koja je dio samog javascript-a,
		// no takodjer smo koristili i funkciju "_.isNumber" koja je implementirana u lodash biblioteci
		if (!isNaN(mojBroj) && _.isNumber(mojBroj))
		{
			console.log("Provjera za znak=" + mojChar + " kaze da je broj!")
		} 
		else 
		{
			console.log("--------------------------");
			console.log("Provjera za znak=" + mojChar + " kaze da NIJE broj!")
			console.log("Provjera za password=" + password + " kaze da NISU svi znakovi brojevi!")
			console.log("--------------------------");
			return false;
		}
	}

	console.log("--------------------------");
	console.log("Provjera za password=" + password + " kaze da su svi znakovi brojevi!")
	console.log("--------------------------");
	return true;
}

/**
 * 3.a. (dodatak)
 *   Ukoliko zelimo odjednom provjeriti da li je cijeli password predan kao broj, 
 *   tj. ukoliko nas ne zanima koji od znaka u nizu nije broj, mozemo funkciju jednostavnije napisati.
 */
var daLiJePasswordBroj = function (password){
	// pokusavamo predani password pretvoriti u broj (potencijalno mozemo dobiti NaN)
	var mojBroj = Number(password);
	// provjeravamo da li je nasa konverzija iz stringa pretvorena u NaN ili broj
	var isBroj = !isNaN(mojBroj) && _.isNumber(mojBroj);
	console.log("--------------------------");
	console.log("Provjera kaze da je predani password broj = " + isBroj); 
	console.log("--------------------------");
	return isBroj;
}

/**
 * 4. 
 *   Zadnji zadatak od nas trazi da ukoliko je password duzi od 10 znakova skratimo 
 *   password na 10 znakova.
 *   Ima vise pristupa, neke cemo pokazati.
 * 	 1) mozemo ponovno ici petljom kao u prethodnim zadacima, iterirati po znakovima i
 *      uzeti prvih 10 znakova te funkcijom vratiti prvih 10 znakova.
 *   2) drugi nacin je koristiti se funkcijom "substring" pa uzeti prvih 10 znakova
 *      bez da iteriramo kroz petlju (ovime stedimo procesorsko vrijeme koje koristi za iteraciju)
 */
var skratiNaPrvih10Znakova = function (password){
	// provjeravamo da li je zadani password duzi od 10 znakova,
	// te samo ukoliko je duzi cemo raditi rezanje na 10 znakova
	if (password.length > 10)
	{
		// dodjeljujemo neku privremenu varijablu u koju cemo konkatenirati nas novi skraceni password
		var tmpPasswd = "";
		// 1)
		// iteriramo po svakom znaku
		for(var i = 0; i < 10; i++){
			// svaki znak lijepimo/konkateniramo na nasu privremenu varijablu
			tmpPasswd += password.charAt(i);
		}
		// nakon sto smo izasli iz petlje, odnosno uzeli prvih 10 znakova, vracamo funkciji vrijednost 
		// nase privremene varijable, odnosno u toj vrijednosti ocekujemo prvih 10 karaktera, a ne i ostale! 
		console.log("Password je bio duzi od 10 znakova, tocnije bio je " + password.length + " i skracen je na " + tmpPasswd);
		return tmpPasswd;

		// 2)
		// drugi nacin koji smo spomenuli, mozemo koristiti gotovu funkciju "substring" kako bi uzeli 
		// prvih 10 znakova i vratili tu vrijednost funkciji
		//return password.substring(0, 10);
	}

	// ukoliko predani password je manji od 10 znakova, vratit cemo ga takvog kakav nam je i predan
	// primjerimo da nismo koristili "else" zato sto smo unutar "if" koristili return
	console.log("Password NIJE bio duzi od 10 znakova, tocnije bio je " + password.length + " te je vracen kao takav  " + password);
	return password;

}

//console.log("rezultat = " + isUniqueCharacters(dobro.toString()));

//console.log("rezultat duljine = " + isVeciOd10(dobro.toString()));

//jedinstveniZnakovi(dobro);
//jedinstveniZnakovi(lose);

console.log("===== 1. provjera jedinstvenosti - POCETAK =====\n");
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
console.log("===== 1. provjera jedinstvenosti - KRAJ =====\n\n");

console.log("===== 2. provjera brojcane vrijednosti - POCETAK =====\n");
daLiJeSvakiZnakBroj(dobro);
daLiJeSvakiZnakBroj(lose);
//daLiJeSvakiZnakBroj("125zzTop");
console.log("----- Dodatna provjera na drugi nacin - Pocetak -----\n");
daLiJePasswordBroj(dobro);
//daLiJePasswordBroj("125zzTop");
console.log("----- Dodatna provjera na drugi nacin - Kraj -----\n\n");
console.log("===== 2. provjera brojcane vrijednosti - KRAJ =====\n\n");


console.log("===== 3. Skrati password na 10 znakova - POCETAK =====\n");
skratiNaPrvih10Znakova(dobro);
skratiNaPrvih10Znakova(lose);

skratiNaPrvih10Znakova("9876543210987");
console.log("===== 3. Skrati password na 10 znakova - KRAJ =====\n\n");

const zadaca = "\n\nZADACA \n- Napisi funkciju koja ce za zadani password provjeriti sva tri uvjeta odjednom:\n \
 1) skrati duzinu na 10 znakova,\n \
 2) provjeri u skracenoj duzini da su svi znakovi brojke,\n \
 3) provjeri u skracenoj duzini da su svi znakovi jedinstveni \n \
 - za return ce dati true ukoliko su oba uvjeta za skraceni password tocni, u suprotnom false";

 console.log(zadaca);


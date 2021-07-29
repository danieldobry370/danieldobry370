var SmalleyModule = (function() {
	var types = {
		lion: {
			title: "Závěr",
			relationalStrengths: "Díky vaším znalostem jste známou osobností. Znáte tento svět skrz na skrz a nováčci k Vám chodí s otázkami a Vy jim vždy dokážete pomoci a správně poradit. Je jasné, že máte spostu let zkušeností za sebou, a celá bdsm komunita je na Vás hrdá! Jste úkazem toho, kam to všichni můžeme dotáhnout pokud budeme neustále trénovat a realizovat své vášně a fetiše, a zároveň máte toho tolik co nabídnout! BDSM je Váš život, Vaše vášeň a Vaše hobby v jednom, a je to rozhodně znát! Od momentu kdy se ráno probudíte, žijete v tomto životním stylu až do momentu kdy si znovu uložíte ke spánku, pokud teda jste nepřidali kinky i do spánku! Kdykoli se někdo ptá co to je žít BDSM naplno, tak poukážeme na lidi jako jste Vy, a to nás naplňuje inspirací a nápady jak se posunout vpřed a ještě více se toho naučit. Děkujeme!",
			strengthsOutOfBalance: "1. ČLOVĚK CO rád switchuje a baví ho experimentovat a objevovat a je mu uplně jedno co (KOLÍSAVÉ HODNOTY - NĚKDY NA 0% JINDY NA 100%)",
			communicationStyle: "Prázdné pole: 3",
			relationalNeeds: "Prázdné pole: 4",
			relationalBalance: "Prázdné pole: 5"
		},
		otter: {
			title: "Závěr",
			relationalStrengths: "Jste expertem/expertkou ve svém řemeslu! Ať už jste dom nebo sub, všichni okolo Vás touží po tom, si s Vámi zahrát díky Vaším zkušenostem a dovednostem co se týká alternativních sexuálních hrátek! Vždy jsou ale nové způsoby jak si okořenit to co už znáte! Třeba zkuste použít různé hračky najednou, nejlépe tak, aby jste zamíchali pocity které jsou opačné (bolest x potěšení) do jednoho a vytvořili mnohem intenzivnější „session“, kterou si budete dlouho pamatovat! Taktéž doufáme, že chodíte na eventy a akce s Vaší lokální komunitou, protože ostatní se rozhodně mohou od Vás toho hodně naučit! Jsme rádi, že se můžeme opřít o lidi jako jste Vy, jelikož házíte na náš životní styl velmi dobré světlo i mimo naší komunitu, a tudíž to přitahuje víc lidí, které toužíme poznat a uvítat mezi nás.",
			strengthsOutOfBalance: "2. ČLOVĚK CO NENÍ tak velký experimentator. Má své uchylky kterých se drží (PRŮMĚR 50%)",
			communicationStyle: "Prázdné pole: 3",
			relationalNeeds: "Prázdné pole: 4",
			relationalBalance: "Prázdné pole: 5"
		},
		goldenRetriever: {
			title: "Závěr",
			relationalStrengths: "BDSM je úžasný, viďte? Máte už nějaké zkušenosti v BDSM ale i přesto máte pocit že většina tohoto světa je velká neznámá, kterou za každou cenu musíte prozkoumat. Nebojte se, taky to tak máme! BDSM, pokud proveden správně (doporučujeme udělat výzkum o bezpečí během BDSM her) je velká zábava a vyvolá ve Vás pocity, které nic jiného vyvolat nedokáže. Velmi důležité je si uvědomit, že moment, kdy se kdokoli z nás přestaneme učit a budeme si myslet, že všechno víme, je koncem našeho dobrodružství, protože BDSM je o cestě za vědomostmi a o poznání her a hraček které jsme doposud nezkusili. Přece jen jste se dostal/a tam kde jste pouze díky zkoumání svého těla, svých pocitů a svých kinků, a nejlepší je v tom pokračovat. Velmi se těšíme, kam Vás tento životní styl zavede, nezapomeňte znovu udělat tento test po nějakém čase aby jste viděli, v jaké míře jste se od nynějšího okamžiku změnil/a!",
			strengthsOutOfBalance: "3. ČLOVĚK KTERÉMU nejde o uchylky ale spíš o prožitek z sexu (SLABŠÍ HODNOTY 20%)",
			communicationStyle: "Prázdné pole: 3",
			relationalNeeds: "Prázdné pole: 4",
			relationalBalance: "Prázdné pole: 5"
			},
		beaver: {
			title: "Závěr",
			relationalStrengths: "Moc dobře víte, že Vaše choutky jsou jiné. Začínáte poznávat BDSM a velmi se Vám tu líbí! Očividně máte velmi zajímavé záliby a teprve poznáváte tento široký svět plný nejrůznějších her a stylů, tudíž to nejlepší máte ještě před sebou! Důležité je nebát se zkoušet nové věci a hlavně se za ně nestydět, tato komunita je jedna z nejvíce tolerantních a nikdo kdo má BDSM v srdci se nikomu nebude smát a ani si vyčítat žádné kinky, naopak se navzájem podpoříme a pomůžeme v poznávání sama sebe. Doporučujeme si prostudovat vaší roli, aby jste poznali co se od Vás očekává a jak být správným partnerem, které role jsou s tou vaší kompatibilní a jak je co nejvíc potěšit. Kinky a fetiše jsou úžasný oceán kde se potopit a nabrat nové zkušenosti a vědomosti!",
			strengthsOutOfBalance: "4. ČLOVĚK CO JE nadšenec co hledá nové možnosti (NADPRŮMĚR 80%)",
			communicationStyle: "Prázdné pole: 3",
			relationalNeeds: "Prázdné pole: 4",
			relationalBalance: "Prázdné pole: 5"
	}
	};
	var l, o, g, b, z, p, m, n, f, s, t, u, v, w, a, j, k;
 
	function resetScores() {
		l = o = g = b = z = p = m = n = f = s = t = u = v = w = a = j = k = 0;
	}
	
	function getScores() {
		var inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(i) {
			if (i.checked) {
				switch (i.name.substring(0,1)) {
					case "l": l += parseInt(i.value); break;
					case "o": o += parseInt(i.value); break;
					case "g": g += parseInt(i.value); break;
					case "b": b += parseInt(i.value); break;
					case "z": z += parseInt(i.value); break;

					case "p": p += parseInt(i.value); break;
					case "m": m += parseInt(i.value); break;
					case "n": n += parseInt(i.value); break;
					case "f": f += parseInt(i.value); break;
					case "s": s += parseInt(i.value); break;
				}
			}
		});
	}
	
	function createCharts() {
		var total = 20;
		var d = (z / 20) * 100;
		var exp = o + g + b + z + p + m + n + f + s;
		var vannila = exp / 2;
		var swi = ((l / total * 100) < (o / total * 100)) ? (l / total * 100) : (o / total * 100);
		
		document.querySelector("#l-chart").style.width = (l / total * 100) + "%"; //Dominant
		document.querySelector("#o-chart").style.width = (o / total * 100) + "%";//Submissive OK
		
		
		
		
		document.querySelector("#g-chart").style.width = (g / total * 100) + "%";//Sadist OK
		document.querySelector("#b-chart").style.width = (b / total * 100) + "%";//Masochist OK OK
		document.querySelector("#z-chart").style.width = (z / total * 100) + "%";//Polygamist OK
		document.querySelector("#p-chart").style.width = (p / total * 100) + "%";//Exhibitionist OK
		document.querySelector("#m-chart").style.width = (m / total * 100) + "%";//Daddy/Mommy OK
		document.querySelector("#n-chart").style.width = (n / total * 100) + "%";//Boy/Girl OK
		document.querySelector("#f-chart").style.width = (f / total * 100) + "%";//Hunter OK
		document.querySelector("#s-chart").style.width = (s / total * 100) + "%";//Prey OK
		
		
	 
		
 
		var pett = Math.round((Math.round((f + s) / 2 / total * 100)) * 0.1) * 10;
		var slavv = Math.round((Math.round((o + b) / 2 / total * 100)) * 0.1) * 10;
		var mass = Math.round((Math.round((l + g) / 2 / total * 100)) * 0.1) * 10;
		var switt = Math.round((Math.round(swi)) * 0.1) * 10;
		var monn = Math.round(100 - d);
		var expp = exp > 5 ? ((Math.round((Math.round(exp / 2)) * 0.1) * 10) + 5) : 0;
		var vann = vannila < 90 ? (vannila < 85 ? (vannila < 80 ? ((Math.round((Math.round(100 - vannila)) * 0.1) * 10)) : 10) : 5) : 0;
		
		var ager = Math.round((Math.round((m + n) / 2 / total * 100)) * 0.1) * 10;

var dom = (Math.round((Math.round(l / total * 100)) * 1.0) * 1);
var sub = (Math.round((Math.round(o / total * 100)) * 1.0) * 1);
var sadist = (Math.round((Math.round(g / total * 100)) * 1.0) * 1);
var maso = (Math.round((Math.round(b / total * 100)) * 1.0) * 1);
var poly = (Math.round((Math.round(z / total * 100)) * 1.0) * 1);
var exhib = (Math.round((Math.round(p / total * 100)) * 1.0) * 1);
var damo = (Math.round((Math.round(m / total * 100)) * 1.0) * 1);
var bogi = (Math.round((Math.round(n / total * 100)) * 1.0) * 1);
var hun = (Math.round((Math.round(f / total * 100)) * 1.0) * 1);
var preys = (Math.round((Math.round(s / total * 100)) * 1.0) * 1);
   
var fusf = 
"== Vyhodnocení kinktest.obscurefreaks.cz ==&#13;&#10;&#13;&#10;" + 
String(expp) + 
"% Experimentator&#13;&#10;" + 

String(switt) + 
"% Switch&#13;&#10;" + 

String(dom) + 
"% Dominant&#13;&#10;" + 

String(sub) + 
"% Submissive&#13;&#10;" + 

String(mass) + 
"% Master&#13;&#10;" + 

String(slavv) + 
"% Slave&#13;&#10;" + 

String(sadist) + 
"% Sadist&#13;&#10;" + 

String(maso) + 
"% Masochist&#13;&#10;" + 

String(poly) + 
"% Polygamist&#13;&#10;" + 

String(monn) + 
"% Monogamist&#13;&#10;" + 

String(exhib) + 
"% Exhibitionist&#13;&#10;" + 

String(ager) + 
"% Ageplayer&#13;&#10;" + 

String(damo) + 
"% Daddy/Mommy&#13;&#10;" + 

String(bogi) + 
"% Boy/Girl&#13;&#10;" + 

String(pett) + 
"% Petplayer&#13;&#10;" + 

String(hun) + 
"% Hunter&#13;&#10;" + 

String(preys) + 
"% Prey&#13;&#10;" + 

String(vann) + 
"% Vannilla";

		
		document.querySelector("#t-chart").style.width = pett + "%";//Pet OK
		
		document.querySelector("#u-chart").style.width = slavv + "%";//Slave OK
		
		document.querySelector("#v-chart").style.width = mass + "%";//Master OK
 
		document.querySelector("#w-chart").style.width = switt + "%"; //Switch vždy menší protihodnota suba nebo doma

		document.querySelector("#a-chart").style.width = monn + "%"; //Monogamist OK
		
		document.querySelector("#j-chart").style.width = expp + "%";//Experimentator OK
		
		
		document.querySelector("#k-chart").style.width = vann + "%";//Vannilla OK

		document.querySelector("#r-chart").style.width = ager + "%";//Vannilla OK
        
        document.querySelector("#t-score").innerHTML = pett;
		document.querySelector("#u-score").innerHTML = slavv;
		document.querySelector("#v-score").innerHTML = mass;
		document.querySelector("#w-score").innerHTML = switt;
		document.querySelector("#a-score").innerHTML = monn;
		
		
		document.querySelector("#j-score").innerHTML = expp;
		document.querySelector("#k-score").innerHTML = vann; 
		document.querySelector("#r-score").innerHTML = ager; 	
		
	 
 

		  document.getElementById("area").innerHTML = fusf;
		
		
		
		
		
		
	}
	
	function populateDescriptions() {
		var highScore = l;
		var type = types.lion;
 
		
		if (p > highScore) {
			type = types.otter;
			highScore = p;
		}
		if (m > highScore) {
			type = types.beaver;
			highScore = m;
		}
		if (n > highScore) {
			type = types.goldenRetriever;
			highScore = n;
		}
		if (f > highScore) {
			type = types.lion;
			highScore = f;
		}
		if (s > highScore) {
			type = types.beaver;
			highScore = s;
		}
		
		if (t > highScore) {
			type = types.otter;
			highScore = t;
		}
 		 
 
		
		if (o > highScore) {
			type = types.goldenRetriever;
			highScore = o;
		}
		if (g > highScore) {
			type = types.beaver;
			highScore = g;
		}
		if (z > highScore) {
			type = types.otter;
			highScore = z;
		}
		
		if (u > highScore) {
			type = types.lion;
			highScore = u;
		}
		if (v > highScore) {
			type = types.beaver;
			highScore = v;
		}
		if (a > highScore) {
			type = types.goldenRetriever;
			highScore = a;
		}
			if (j > highScore) {
			type = types.otter;
			highScore = j;
		}
			if (k > highScore) {
			type = types.lion;
			highScore = k;
		}
		if (w > highScore) {
			type = types.goldenRetriever;
			highScore = w;
		}
		if (b > highScore) {
			type = types.beaver;
			highScore = b;
		}
 
		document.querySelector("#resultTitle").innerHTML = type.title;
		document.querySelector("#relationalStrengths").innerHTML = type.relationalStrengths;
		document.querySelector("#strengthsOutOfBalance").innerHTML = type.strengthsOutOfBalance;
		document.querySelector("#communicationStyle").innerHTML = type.communicationStyle;
		document.querySelector("#relationalNeeds").innerHTML = type.relationalNeeds;
		document.querySelector("#relationalBalance").innerHTML = type.relationalBalance;
		
		
		  
		
		
	}
	
	function showScores() {
		document.querySelector("#l-score").innerHTML = l * 5; //Dominant
		document.querySelector("#o-score").innerHTML = o * 5; //Submissive OK
		document.querySelector("#g-score").innerHTML = g * 5; //Sadist OK
		document.querySelector("#b-score").innerHTML = b * 5; //Masochist OK OK
		document.querySelector("#z-score").innerHTML = z * 5; //Polygamist OK


		document.querySelector("#p-score").innerHTML = p * 5; //Exhibitionist OK
		document.querySelector("#m-score").innerHTML = m * 5; //Daddy/Mommy OK
		document.querySelector("#n-score").innerHTML = n * 5; //Boy/Girl OK
		document.querySelector("#f-score").innerHTML = f * 5; //Hunter OK
		document.querySelector("#s-score").innerHTML = s * 5; //Prey OK
		
		
		
 
 
 
		
		document.querySelector("#results").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			createCharts();
			populateDescriptions();
			showScores();
		}
	};
})();

document.querySelector("#submit").onclick = function() {
	SmalleyModule.processForm();
};
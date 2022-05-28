


let clickBtn = jQuery('#submit');
clickBtn.click(function () {

	let selectDate = +$('.select_date').val();
	let selectMonth = +$('.select_month').val();
	let selectYear = +$('.select_year').val();

	let result = `${selectMonth}  ${selectDate}  ${selectYear}`;
	let result2 = new Date (result);
	result2.setDate(result2.getDate() +4);
	let result3 = new Date (result);
	result3.setMonth(result3.getMonth() +1);
	let result4 = new Date (result);
	result4.setMonth(result4.getMonth() +3);
	let result5 = new Date (result);
	result5.setDate(result5.getDate() +135);
	let result6 = new Date (result);
	result6.setMonth(result6.getMonth() +6);
	let result7 = new Date (result);
	result7.setMonth(result7.getMonth() +12);
	let result8 = new Date (result);
	result8.setMonth(result8.getMonth() +18);


	// ---------Вывод адекватной даты------------
	function addLidingZero(d) {
		return (d < 10) ? '0' + d : d;
	}

	const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
	const uaMouth = ['Січеня', 'Лютого', 'Березеня', 'Квітеня', 'Травеня', 'Червеня', 'Липеня', 'Серпеня',
		'Вересеня', 'Жовтеня', 'Листопада', 'Груденя']

	function getUserTime(t) {
		let year = t.getFullYear();
		let mounth = uaMouth[t.getMonth()];
		let date = addLidingZero(t.getDate());
		let day = days[t.getDay()];
		// console.log(year, mounth, date, day);
		return `${date} ${mounth} ${year} року (${day})`
	}

	let renegate = (getUserTime(new Date(result)));
	let renegate2 = (getUserTime(new Date(result2)));
	let renegate3 = (getUserTime(new Date(result3)));
	let renegate4 = (getUserTime(new Date(result4)));
	let renegate5 = (getUserTime(new Date(result5)));
	let renegate6 = (getUserTime(new Date(result6)));
	let renegate7 = (getUserTime(new Date(result7)));
	let renegate8 = (getUserTime(new Date(result8)));
	console.log(renegate);


	// ===============Переменные для ввода в таблицу===========================
	let row_21 = renegate;
	$('.row_21').html(row_21);
	let row_22 = 'У перші 12 годин життя';
	$('.row_22').html(row_22);
	let row_23 = 'Перша вакцинація проти вірусного гепатиту B';
	$('.row_23').html(row_23);
	// ---------------------------------------------------------------------
	let row_31 = renegate2;
	$('.row_31').html(row_31);
	let row_32 = 'Новонароджені (3-7 днів)';
	$('.row_32').html(row_32);
	let row_33 = 'Вакцинація проти туберкульозу';
	$('.row_33').html(row_33);
	// ----------------------------------------------------------------------
	let row_41 = renegate3;
	$('.row_41').html(row_41);
	let row_42 = '1 місяць';
	$('.row_42').html(row_42);
	let row_43 = 'Друга вакцинація проти вірусного гепатиту B';
	$('.row_43').html(row_43);
	// ----------------------------------------------------------------------
	let row_51 = renegate4;
	$('.row_51').html(row_51);
	let row_52 = '3 місяць';
	$('.row_52').html(row_52);
	let row_53 = 'Перша вакцинація проти дифтерії, кашлюку, правця, поліомієліту';
	$('.row_53').html(row_53);
	// ----------------------------------------------------------------------
	let row_61 = renegate5;
	$('.row_61').html(row_61);
	let row_62 = '4,5 місяця';
	$('.row_62').html(row_62);
	let row_63 = 'Друга вакцинація проти дифтерії, кашлюку, правця, поліомієліту';
	$('.row_63').html(row_63);
	// ----------------------------------------------------------------------
	let row_71 = renegate6;
	$('.row_71').html(row_71);
	let row_72 = '6 місяців';
	$('.row_72').html(row_72);
	let row_73 = 'Третя вакцинація проти дифтерії, кашлюку, правця, поліомієліту. Третя вакцинація проти вірусного гепатиту B';
	$('.row_73').html(row_73);
	// ----------------------------------------------------------------------
	let row_81 = renegate7;
	$('.row_81').html(row_81);
	let row_82 = '12 місяців';
	$('.row_82').html(row_82);
	let row_83 = 'Вакцинація проти кору, краснухи епідемічного паротиту';
	$('.row_83').html(row_83);
	// ----------------------------------------------------------------------
	let row_91 = renegate8;
	$('.row_91').html(row_91);
	let row_92 = '18 місяців';
	$('.row_92').html(row_92);
	let row_93 = 'Перша ревакцинація проти дифтерії, кашлюку, правця, поліомієліту';
	$('.row_93').html(row_93);
})







// let button = $('.item_btn');
// button.click(function () {
// 	let newPrice = + $('.input_price').val();
// 	let value = +$('.input_volume').val();
// 	let resValue = value * 3.6;
// 	let sity = $('.sity_select').val();
// 	let newDeclaration = 100;
// 	let cusroms = 1000;
// 	let broker = newPrice * 0.1;
// 	let disposal = newPrice * 0.03;
// 	let ourCompany = newPrice * 0.15;
// 	let newCurse = +$('.curse').html();

// 	console.log(resNds);




// 	$('.text_price').html(newPrice);
// 	$('.text_duty').html(parseFloat(resValue.toFixed(2)))
// 	$('.text_delivery').html(sity);
// 	$('.text_decloration').html(newDeclaration);
// 	$('.text_customs').html(cusroms);
// 	$('.text_broker').html(broker);
// 	$('.text_disposal').html(disposal);
// 	$('.text_our_company').html(ourCompany);
// 	$('.text_nds').html(parseFloat(-ndsDont.toFixed(2)));
// 	$('.text_price').val(result); -Если нужно вставить текст в инпут

// })
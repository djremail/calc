jQuery('.form').click(function () {
	jQuery('.table').hide('slow');
});

let newYear;
let startY = +moment().format('YYYY') - 10;
let endY = +moment().format('YYYY') + 2;
for (let i = startY; i <= endY; i++) {
	newYear += '<option value="' + i + '">' + i + '</option>';
}

$('.select_year').html(newYear);
// -----------------------------------------------------

let clickBtn = jQuery('#submit');
clickBtn.click(function () {

	jQuery('.table').show('slow');

	let selectDate = +$('.select_date').val();
	let selectMonth = +$('.select_month').val();
	let selectYear = +$('.select_year').val();
	let selectCountry = +$('.select_city').val();
	console.log(selectCountry);

	let result = [selectMonth, selectDate, selectYear];
	let result2 = new Date(result);
	let resultPlus = +new Date(result);
	let today = +new Date();
	console.log(today);

	if (resultPlus > today) {
		alert('Зверніть увагу, що це дата із майбутнього!')
	}

	result2.setDate(result2.getDate() + 4);
	let result3 = new Date(result);
	result3.setMonth(result3.getMonth() + 1);
	let result4 = new Date(result);
	result4.setMonth(result4.getMonth() + 3);
	let result5 = new Date(result);
	result5.setDate(result5.getDate() + 135);
	let result6 = new Date(result);
	result6.setMonth(result6.getMonth() + 6);
	let result7 = new Date(result);
	result7.setMonth(result7.getMonth() + 12);
	let result8 = new Date(result);
	result8.setMonth(result8.getMonth() + 18);
	let result9 = new Date(result);
	result9.setDate(result9.getDate() + 45);
	let result10 = new Date(result);
	result10.setMonth(result10.getMonth() + 2);
	let result11 = new Date(result);
	result11.setMonth(result11.getMonth() + 4);


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
	let renegate9 = (getUserTime(new Date(result9)));
	let renegate10 = (getUserTime(new Date(result10)));
	let renegate11 = (getUserTime(new Date(result11)));
	console.log(renegate);
	let finalData = renegate;
	$('.text_data').html('Дата народження Вашої дитини' + ' ' + finalData);


	// ===============Переменные для ввода в таблицу===========================
	if (selectCountry === 1) {
		let row_21 = renegate;
		$('.row_21').html(row_21);
		$('.row_22').html('У перші 12 годин життя');
		$('.row_23').html('Перша вакцинація проти вірусного гепатиту B')
		// ---------------------------------------------------------------------
		let row_31 = renegate2;
		$('.row_31').html(row_31);
		$('.row_32').html('Новонароджені (3-7 днів)');
		$('.row_33').html('Вакцинація проти туберкульозу');
		// ----------------------------------------------------------------------
		let row_41 = renegate3;
		$('.row_41').html(row_41);
		$('.row_42').html('1 місяць');
		$('.row_43').html('Друга вакцинація проти вірусного гепатиту B');
		// ----------------------------------------------------------------------
		let row_51 = renegate4;
		$('.row_51').html(row_51);
		$('.row_52').html('3 місяць');
		$('.row_53').html('Перша вакцинація проти дифтерії, кашлюку, правця, поліомієліту');
		// ----------------------------------------------------------------------
		let row_61 = renegate5;
		$('.row_61').html(row_61);
		$('.row_62').html('4,5 місяця');
		$('.row_63').html('Друга вакцинація проти дифтерії, кашлюку, правця,поліомієліту');
		// ----------------------------------------------------------------------
		let row_71 = renegate6;
		$('.row_71').html(row_71);
		$('.row_72').html('6 місяців');
		$('.row_73').html('Третя вакцинація проти дифтерії, кашлюку, правця, поліомієліту. Третя вакцинація проти вірусного гепатиту B');
		// ----------------------------------------------------------------------
		let row_81 = renegate7;
		$('.row_81').html(row_81);
		$('.row_82').html('12 місяців');
		$('.row_83').html('Вакцинація проти кору, краснухи епідемічного паротиту');
		// ----------------------------------------------------------------------
		let row_91 = renegate8;
		$('.row_91').html(row_91);
		$('.row_92').html('18 місяців');
		$('.row_93').html('Перша ревакцинація проти дифтерії, кашлюку, правця, поліомієліту');

	} else if (selectCountry === 2 || selectCountry === 3) {
		let row_21 = renegate9;
		$('.row_21').html(row_21);
		$('.row_22').html('1.5 місяці');
		$('.row_23').html('Ротавірус')
		// ----------------------------------------------------------------------
		let row_31 = renegate10;
		$('.row_31').html(row_31);
		$('.row_32').html('2 місяці');
		$('.row_33').html('Стовпняк+дифтерія, кашлюк, поліомієліт, пневмокок, гепатит B, гемофілія b')
		// -----------------------------------------------------------------------
		$('.row_41').html(row_31);
		$('.row_42').html('2 місяці');
		$('.row_43').html('Ротавірус')
		// -----------------------------------------------------------------------
		let row_51 = renegate4;
		$('.row_51').html(row_51);
		$('.row_52').html('3 місяці');
		$('.row_53').html('Ротавірус (за потреби). Проконсультуватися у лікаря')
		// -----------------------------------------------------------------------
		let row_61 = renegate11;
		$('.row_61').html(row_61);
		$('.row_62').html('4 місяці');
		$('.row_63').html('Стовпняк+дифтерія, кашлюк, поліомієліт, пневмокок, гепатит B, гемофілія b')
		// -----------------------------------------------------------------------
		$('.row_71').html(row_61);
		$('.row_72').html('4 місяці');
		$('.row_73').html('Пневмокок')
		// -----------------------------------------------------------------------
		let row_81 = renegate7;
		$('.row_81').html(row_81);
		$('.row_82').html('1 рік');
		$('.row_83').html('Стовпняк+дифтерія, кашлюк, поліомієліт, пневмокок, гепатит B, гемофілія b')
		// -----------------------------------------------------------------------
		$('.row_91').html(row_81);
		$('.row_92').html('1 рік');
		$('.row_93').html('Паротит, кір, краснуха, вітряна віспа')
	}
})

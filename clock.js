document.addEventListener('DOMContentLoaded', () => {
	const displayedDate = document.querySelector('#displayed-date');
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const date = new Date();
	const currentDay = date.getDay();
	const currentMonth = monthNames[date.getMonth()];
	const currentYear = date.getFullYear();

	displayedDate.innerHTML = `${currentDay} ${currentMonth} ${currentYear}`;

	const currentTime = () => {
		const digitalClock = document.querySelector('.digital-clock');
		const date = new Date();
		let hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds();

		hour = updateTime(hour);
		min = updateTime(min);
		sec = updateTime(sec);

		digitalClock.innerText = `${hour}:${min}:${sec}`;

		let timer = setTimeout(() => {
			currentTime();
		}, 1000);
	};

	function updateTime(elem) {
		if (elem < 10) {
			return '0' + elem;
		} else {
			return elem;
		}
	}

	currentTime();
});

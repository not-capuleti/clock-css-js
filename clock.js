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

	const setDate = () => {
		const today = new Date();
		const currentDay = String(today.getDate()).padStart(2, '0');
		const currentMonth = String(monthNames[today.getMonth()]);
		const currentYear = today.getFullYear();
		displayedDate.innerHTML = `${currentDay} ${currentMonth} ${currentYear}`;
	};

	const setTime = () => {
		const digitalClock = document.querySelector('.digital-clock');

		const secondHand = document.querySelector('.seconds-hand'),
			minsHand = document.querySelector('.minutes-hand'),
			hoursHand = document.querySelector('.hour-hand');

		const date = new Date();
		let hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds();

		hour = updateTime(hour);
		min = updateTime(min);
		sec = updateTime(sec);

		digitalClock.innerText = `${hour}:${min}:${sec}`;

		const secDegree = sec * (360 / 60) + 90;
		const minDegree = min * (360 / 60) + 90;
		const hourDegree = hour * (360 / 12) + 90;

		secondHand.style.transform = `rotate(${secDegree}deg)`;
		minsHand.style.transform = `rotate(${minDegree}deg)`;
		hoursHand.style.transform = `rotate(${hourDegree}deg)`;

		let timer = setTimeout(() => {
			setTime();
		}, 1000);
	};

	function updateTime(elem) {
		if (elem < 10) {
			return '0' + elem;
		} else {
			return elem;
		}
	}

	setDate();
	setTime();
});

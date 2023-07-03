const calendarFilter = document.querySelector('.js-calendar-filter');
const calendarBody = document.querySelector('.js-calendar-rows');
const calendarButton = document.querySelector('.js-calendar-show-full');

const ACTIVE_BUTTON_CLASS = 'filterButton--active'
const COMPACT_TABLE_CLASS = 'calendar__body--compact'

export function initCalendar() {
  if (!calendarFilter || !calendarBody || !calendarButton) {
    return
  }

  const calendarRows = calendarBody.querySelectorAll('tr');

  calendarButton.addEventListener('click', function(e) {
    e.preventDefault()

    calendarBody.classList.remove(COMPACT_TABLE_CLASS)
    calendarButton.style.display = 'none';
  })

  calendarFilter.addEventListener('click', function(e) {
    const button = e.target

    if (button.tagName !== 'BUTTON') {
      return
    }

    calendarBody.classList.remove(COMPACT_TABLE_CLASS)

    const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

    if (activeButton) {
      activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
    }

    const type = button.dataset.type

    calendarRows.forEach((row) => {
      row.classList.toggle('calendar__row--hidden', row.dataset.type !== type && type !== 'all')
    })

    calendarButton.style.display = 'none';

  })
}
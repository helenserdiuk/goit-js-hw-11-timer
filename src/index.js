import './styles.css';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTimeInterval(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  timer() {
    const currentTime = new Date();
    const interval = this.targetDate - currentTime;
    this.createWebTimet(interval);
    setInterval(() => {
      const currentTime = new Date();
      const interval = this.targetDate - currentTime;
      this.createWebTimet(interval);
    }, 1000);
  }

  createWebTimet(interval) {
    const timerEl = document.querySelector(this.selector);
    const timeId = this.getTimeInterval(interval);
    timerEl.querySelector('[data-value="days"]').textContent = timeId.days;
    timerEl.querySelector('[data-value="hours"]').textContent = timeId.hours;
    timerEl.querySelector('[data-value="mins"]').textContent = timeId.mins;
    timerEl.querySelector('[data-value="secs"]').textContent = timeId.secs;
  }
}

const ourTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

ourTimer.timer();

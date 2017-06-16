export const className = `material-ripple`;

const inkClassName = `${className}-ink`;
const animateClass = `${inkClassName}-animate`;

export function eventListener({ target, pageX, pageY }) {
  if (!target.matches(`.${className}`)) {
    target = target.closest(`.${className}`);

    if (!target) {
      return;
    }
  }

  let ink = target.querySelector(`.${inkClassName}`);

	if (!ink) {
    ink = Object.assign(document.createElement('div'), {
      className: inkClassName,
    });

		target.insertBefore(ink, target.firstChild);
	}

	ink.classList.remove(animateClass);

	const x = pageX - target.offsetLeft - (ink.offsetWidth / 2);
	const y = pageY - target.offsetTop - (ink.offsetHeight / 2);

  ink.style.setProperty(`--${className}-ink-top`, `${y}px`);
  ink.style.setProperty(`--${className}-ink-left`, `${x}px`);

  ink.classList.add(animateClass);
}

if (typeof document !== 'undefined') {
  document.body.addEventListener('click', eventListener);
}

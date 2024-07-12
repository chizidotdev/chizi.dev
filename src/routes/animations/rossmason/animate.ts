import { gsap as TGsap } from 'gsap';

export function animate(gsap: typeof TGsap) {
	const tl = gsap.timeline({ delay: 1 });

	gsap.set('h1', { y: 100 });

	tl.to('h1', {
		y: 0,
		duration: 1,
		ease: 'power3.out',
		stagger: 0.1
	});

	tl.to('.header-item', {
		clipPath: 'none',
		duration: 0.1
	});

	tl.from('.preview', {
		width: '0',
		margin: '0',
		duration: 1.5,
		ease: 'power3.out'
	});

	tl.to('.header-item', {
		translateY: '140%',
		duration: 1,
		ease: 'power3.out'
	});

	tl.to(
		'h1',
		{
			fontSize: '11vw',
			duration: 1,
			ease: 'power3.out'
		},
		'<'
	);

	tl.to(
		'.preview',
		{
			marginLeft: '-1vw',
			marginRight: '-6vw',
			width: '30vw',
			duration: 1,
			ease: 'power3.out'
		},
		'<'
	);

	tl.from('.logo, .link, footer p', {
		y: 20,
		opacity: 0,
		stagger: 0.1
	});
}

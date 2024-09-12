import React, { useState, useEffect } from "react";

export default function ProposalPage() {
	const [showInitial, setShowInitial] = useState(true); // Step 1: Initial state
	const [showDay, setShowDay] = useState(false); // Step 2: Show days state
	const [showFinal, setShowFinal] = useState(false); // Step 3: Final proposal state
	const [dayCount, setDayCount] = useState(1); // Track day number

	const dayStories = [
		"It's a regular day of my life—the day we chatted and planned to meet. Your place was on my way home, so I took a left. Now I realize it was more than just a road; it was the right track. You were in a green T-shirt, like a green flag. We had tea, and then we returned.",
		"Day 2, we met again. This time, we had some plans to get to know each other a bit more. What I remember most is your dolphin design earrings and your simple beauty.",
		"Day 3, the traditional dress, the evening, the park, and the city view with you was just awesome.",
		"The days are counting with more memories and stories... Let's not take too much time.",
	];

	const handleComeWithMeClick = (e) => {
		e.preventDefault();
		setShowInitial(false); // Hide initial message
		setShowDay(true); // Start showing day sequence
	};

	useEffect(() => {
		if (showDay) {
			let currentDay = 1;
			const dayInterval = setInterval(() => {
				setDayCount((prevDay) => {
					if (prevDay >= 4) {
						clearInterval(dayInterval);
						setShowDay(false); // Hide day sequence
						setShowFinal(true); // Show final proposal
						return prevDay;
					}
					return prevDay + 1;
				});
			}, 5000); // 5 seconds for each day to display the story
		}
	}, [showDay]);

	return (
		<div className='mx-auto w-full max-w-7xl p-4 bg-pink-50 min-h-screen flex justify-center items-center'>
			{/* Step 1: Initial view */}
			{showInitial && (
				<div>
					<h1 className='text-center text-4xl sm:text-5xl py-6 font-bold text-red-600'>
						Hey Sabhya, come with me! 🌹
					</h1>
					<button
						className='w-1/2 py-3 px-6 text-white bg-red-600 rounded-lg hover:opacity-75 font-semibold mx-auto block'
						onClick={handleComeWithMeClick}>
						Let's Go
					</button>
				</div>
			)}

			{/* Step 2: Day transition view with heart background */}
			{showDay && (
				<div className='relative w-full h-full flex justify-center items-center'>
					<div className='heart-background absolute w-full h-full'></div>
					<div className='absolute text-black text-3xl sm:text-4xl font-bold day-transition'>
						💕 Day {dayCount} 💕
						<p className=' text-black text-xl sm:text-2xl font-light mt-4'>
							{dayStories[dayCount - 1]}
						</p>
					</div>
				</div>
			)}

			{/* Step 3: Final proposal view */}
			{showFinal && (
				<div>
					<h1 className='text-center text-4xl sm:text-5xl py-6 font-bold text-red-600'>
						💕 A Special Question 💕
					</h1>
					<p className='text-center text-lg font-light mb-8'>
						I'm on one knee, asking you this...
					</p>
					<form className='space-y-6 bg-white p-8 rounded-lg shadow-lg'>
						<div className='text-center text-3xl font-semibold text-red-600'>
							Will you be mine? 💍
						</div>
						<button
							type='submit'
							className='w-1/2 py-3 px-6 text-white bg-red-600 rounded-lg hover:opacity-75 font-semibold mx-auto block'>
							Yes
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

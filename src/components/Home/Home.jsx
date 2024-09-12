import React, { useState, useEffect } from "react";

export default function ProposalPage() {
	const [showInitial, setShowInitial] = useState(true); // Step 1: Initial state
	const [showDay, setShowDay] = useState(false); // Step 2: Show days state
	const [showFinal, setShowFinal] = useState(false); // Step 3: Final proposal state
	const [dayCount, setDayCount] = useState(1); // Track day number

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
			}, 2000); // 2 seconds for each day
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
					<div className='absolute text-white text-6xl font-bold day-transition'>
						Day {dayCount}
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

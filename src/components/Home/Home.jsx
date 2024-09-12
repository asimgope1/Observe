import React, { useState, useEffect } from "react";

export default function ProposalPage() {
	const [showHeart, setShowHeart] = useState(false);
	const [step, setStep] = useState(0);

	const handleYesClick = (e) => {
		e.preventDefault();
		setStep(1); // Start sequence
	};

	useEffect(() => {
		let timeout;
		if (step === 1) {
			// "Hey, come with me" appears first
			timeout = setTimeout(() => setStep(2), 2000); // Show "Day 1" after 2 seconds
		} else if (step === 2) {
			// "Day 1" appears after "Hey, come with me"
			timeout = setTimeout(() => setStep(3), 2000); // Show "Day 2" after 2 seconds
		} else if (step === 3) {
			// "Day 2" appears after "Day 1"
			timeout = setTimeout(() => setStep(4), 2000); // Show "Day 3" after 2 seconds
		} else if (step === 4) {
			// "Day 3" appears after "Day 2"
			timeout = setTimeout(() => setShowHeart(true), 2000); // Show heart animation after 2 seconds
		}

		return () => clearTimeout(timeout); // Clean up on unmount
	}, [step]);

	return (
		<div className='mx-auto w-full max-w-7xl p-4 bg-pink-50 min-h-screen flex justify-center items-center'>
			{!showHeart ? (
				<div>
					<h1 className='text-center text-4xl sm:text-5xl py-6 font-bold text-red-600'>
						💕 A Special Question 💕
					</h1>
					<p className='text-center text-lg font-light mb-8'>
						I'm on one knee, asking you this...
					</p>
					{step === 0 ? (
						<form className='space-y-6 bg-white p-8 rounded-lg shadow-lg'>
							<div className='text-center text-3xl font-semibold text-red-600'>
								Will you be mine? 💍
							</div>
							<button
								type='submit'
								className='w-1/2 py-3 px-6 text-white bg-red-600 rounded-lg hover:opacity-75 font-semibold mx-auto block'
								onClick={handleYesClick}>
								Yes
							</button>
						</form>
					) : (
						<div className='text-center text-3xl font-semibold text-red-600'>
							{step === 1 && "Hey, come with me..."}
							{step === 2 && "Day 1"}
							{step === 3 && "Day 2"}
							{step === 4 && "Day 3"}
						</div>
					)}
				</div>
			) : (
				<div className='relative w-full h-full flex justify-center items-center'>
					{/* Left heart half */}
					<div
						className={`absolute w-1/2 h-64 bg-red-600 rounded-full transform origin-right ${
							showHeart ? "heart-left-animation" : ""
						}`}
					/>
					{/* Right heart half */}
					<div
						className={`absolute w-1/2 h-64 bg-red-600 rounded-full transform origin-left ${
							showHeart ? "heart-right-animation" : ""
						}`}
					/>
					{/* Final proposal message */}
					{showHeart && (
						<div className='absolute text-white text-4xl font-bold'>
							Will you be mine? 💍
						</div>
					)}
				</div>
			)}
		</div>
	);
}

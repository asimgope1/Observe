import React, { useState } from "react";

export default function ProposalPage() {
	const [showHeart, setShowHeart] = useState(false);
	const [showText, setShowText] = useState(false);

	const handleYesClick = (e) => {
		e.preventDefault();
		setShowHeart(true);
		setTimeout(() => setShowText(true), 2000); // Show "Day 1" after the heart animation completes
	};

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
					{/* Text "Day 1" */}
					{showText && (
						<div className='absolute text-white text-4xl font-bold'>Day 1</div>
					)}
				</div>
			)}
		</div>
	);
}

import React, { useState } from "react";

export default function ProposalPage() {
	return (
		<div className='mx-auto w-full max-w-7xl p-4 bg-pink-50 min-h-screen'>
			<h1 className='text-center text-4xl sm:text-5xl py-6 font-bold text-red-600'>
				💕 A Special Question 💕
			</h1>
			<p className='text-center text-lg font-light mb-8'>
				I'm on one knee, asking you this...
			</p>
			<form className='space-y-6 bg-white p-8 rounded-lg shadow-lg'>
				{/* Render "Will you be mine?" if it's the last step */}
				{
					<div className='text-center text-3xl font-semibold text-red-600'>
						Will you be mine? 💍
					</div>
				}

				<button
					type='submit'
					className='w-1/2 py-3 px-6 text-white bg-red-600 rounded-lg hover:opacity-75 font-semibold'>
					{"yes"}
				</button>
			</form>
		</div>
	);
}

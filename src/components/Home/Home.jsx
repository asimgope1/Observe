import React, { useState } from "react";

export default function ProposalPage() {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		sex: "",
		occupation: "",
		painLocation: "shoulder joint",
		painDuration: "",
		onset: "",
		traumaticDetails: {
			injuryDetails: "",
			traumaPart: "",
		},
		painSeverity: "",
		painTime: "",
		painIncreaseActivity: "",
		painReduceActivity: "",
		swelling: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleTraumaticChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			traumaticDetails: { ...formData.traumaticDetails, [name]: value },
		});
	};

	const handleNext = (e) => {
		e.preventDefault();
		setStep(step + 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		alert("Will you say yes?");
		setStep(0);
	};

	const questions = [
		{
			label: "Your Name",
			type: "text",
			name: "name",
		},
		{
			label: "Your Age (it's just a number!)",
			type: "number",
			name: "age",
		},
		{
			label: "Your Gender",
			type: "text",
			name: "sex",
		},
		{
			label: "Your Occupation (what keeps you busy?)",
			type: "text",
			name: "occupation",
		},
		{
			label: "Pain Duration (let's forget the pain)",
			type: "select",
			name: "painDuration",
			options: [
				"Less than 7 days",
				"15 days",
				"1 month",
				"3 months",
				"6 months",
				"More than 6 months",
			],
		},
		{
			label: "Onset (the day we met?)",
			type: "select",
			name: "onset",
			options: ["Doesn’t know how the pain started", "Pain after a trauma"],
		},
		{
			label: "How did you injure your shoulder? (Or your heart?)",
			type: "text",
			name: "injuryDetails",
			traumatic: true,
		},
		{
			label: "Which part got hit on the trauma (or the love)?",
			type: "text",
			name: "traumaPart",
			traumatic: true,
		},
		{
			label: "On a scale of 1-10, how intense is your love?",
			type: "number",
			name: "painSeverity",
			min: 1,
			max: 10,
		},
		{
			label: "When is the intensity of your love the most?",
			type: "select",
			name: "painTime",
			options: [
				"All the time",
				"In the morning, and then it grows",
				"At night, when we're apart",
			],
		},
	];

	const currentQuestion = questions[step];

	return (
		<div className='mx-auto w-full max-w-7xl p-4 bg-pink-50 min-h-screen'>
			<h1 className='text-center text-4xl sm:text-5xl py-6 font-bold text-red-600'>
				💕 A Special Question 💕
			</h1>
			<p className='text-center text-lg font-light mb-8'>
				I'm on one knee, asking you this...
			</p>
			<form
				onSubmit={step === questions.length - 1 ? handleSubmit : handleNext}
				className='space-y-6 bg-white p-8 rounded-lg shadow-lg'>
				{currentQuestion && (
					<div>
						<label className='block text-xl font-medium text-pink-600'>
							{currentQuestion.label}
						</label>
						{currentQuestion.type === "select" ? (
							<select
								name={currentQuestion.name}
								value={
									currentQuestion.traumatic
										? formData.traumaticDetails[currentQuestion.name]
										: formData[currentQuestion.name]
								}
								onChange={
									currentQuestion.traumatic
										? handleTraumaticChange
										: handleChange
								}
								className='w-full p-3 border-2 border-pink-300 rounded-lg'>
								<option value=''>Select...</option>
								{currentQuestion.options.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</select>
						) : (
							<input
								type={currentQuestion.type}
								name={currentQuestion.name}
								value={
									currentQuestion.traumatic
										? formData.traumaticDetails[currentQuestion.name]
										: formData[currentQuestion.name]
								}
								onChange={
									currentQuestion.traumatic
										? handleTraumaticChange
										: handleChange
								}
								className='w-full p-3 border-2 border-pink-300 rounded-lg'
								{...(currentQuestion.min && { min: currentQuestion.min })}
								{...(currentQuestion.max && { max: currentQuestion.max })}
							/>
						)}
					</div>
				)}

				<button
					type='submit'
					className='w-full py-3 px-6 text-white bg-red-600 rounded-lg hover:opacity-75 font-semibold'>
					{step === questions.length - 1 ? "Will you say yes?" : "Next"}
				</button>
			</form>
		</div>
	);
}

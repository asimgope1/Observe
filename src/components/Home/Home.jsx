import React, { useState } from "react";

export default function Home() {
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
		// Handle form submission
		alert("Form submitted");
		setStep(0); // Reset the form
	};

	const questions = [
		{
			label: "Name",
			type: "text",
			name: "name",
		},
		{
			label: "Age",
			type: "number",
			name: "age",
		},
		{
			label: "Sex",
			type: "text",
			name: "sex",
		},
		{
			label: "Occupation",
			type: "text",
			name: "occupation",
		},
		{
			label: "Pain Duration",
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
			label: "Onset",
			type: "select",
			name: "onset",
			options: ["Doesn’t know how the pain started", "Pain after a trauma"],
		},
		...(formData.onset === "Pain after a trauma"
			? [
					{
						label: "How did you injure your shoulder",
						type: "text",
						name: "injuryDetails",
						traumatic: true,
					},
					{
						label: "Which part get hit on the trauma",
						type: "text",
						name: "traumaPart",
						traumatic: true,
					},
			  ]
			: []),
		{
			label: "Pain Severity (1-10)",
			type: "number",
			name: "painSeverity",
			min: 1,
			max: 10,
		},
		{
			label: "On which time of the day intensity of pain is more",
			type: "select",
			name: "painTime",
			options: [
				"All the time",
				"In the morning then reduces as the day progress",
				"At the end of the day",
				"During night",
			],
		},
		{
			label: "Which activity increases the pain",
			type: "select",
			name: "painIncreaseActivity",
			options: [
				"Lifting your arm over head",
				"Reaching back pocket",
				"Reaching opposite shoulder",
				"Dropping the arm",
				"Rest",
			],
		},
		{
			label: "Which activity reduces the pain",
			type: "select",
			name: "painReduceActivity",
			options: ["Rest", "Shoulder by the side outwards"],
		},
		{
			label: "Is there any swelling present on the shoulder",
			type: "select",
			name: "swelling",
			options: ["Yes", "No"],
		},
	];

	const currentQuestion = questions[step];

	return (
		<div className='mx-auto w-full max-w-7xl p-4'>
			<h1 className='text-center text-2xl sm:text-3xl py-4 font-medium'>
				Shoulder Joint Questionnaire
			</h1>
			<form
				onSubmit={step === questions.length - 1 ? handleSubmit : handleNext}
				className='space-y-4'>
				{currentQuestion && (
					<div>
						<label className='block text-lg font-medium'>
							{currentQuestion.label}:
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
								className='w-full p-2 border rounded'>
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
								className='w-full p-2 border rounded'
								{...(currentQuestion.min && { min: currentQuestion.min })}
								{...(currentQuestion.max && { max: currentQuestion.max })}
							/>
						)}
					</div>
				)}

				<button
					type='submit'
					className='w-full py-2 px-4 text-white bg-orange-700 rounded-lg hover:opacity-75'>
					{step === questions.length - 1 ? "Submit" : "Next"}
				</button>
			</form>
		</div>
	);
}

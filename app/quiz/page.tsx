'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'

import FREE_WORDS from '@/words/paid.json'

interface Definition {
	definition: string
	correct: boolean
}

interface Word {
	word: string
	definitions: Definition[]
}

export default function QuizPage() {
	const [words, setWords] = useState<Word[]>(FREE_WORDS)
	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [score, setScore] = useState(0)
	const [showDialog, setShowDialog] = useState(false)
	const [isGameComplete, setIsGameComplete] = useState(false)
	const [selectedDefinition, setSelectedDefinition] = useState<number | null>(
		null
	)
	const [hasAnsweredIncorrectly, setHasAnsweredIncorrectly] = useState(false)

	const currentWord = words[currentWordIndex]

	const handleAnswerClick = (definitionIndex: number) => {
		if (selectedDefinition !== null) return // Prevent multiple answers

		setSelectedDefinition(definitionIndex)
		const isCorrect = currentWord.definitions[definitionIndex].correct

		if (isCorrect) {
			const points = hasAnsweredIncorrectly ? 5 : 10
			setScore(score + points)
			toast.success(`Correct! +${points} points`)

			// Move to next word after a short delay
			setTimeout(() => {
				if (currentWordIndex === words.length - 1) {
					setIsGameComplete(true)
				} else {
					setCurrentWordIndex(currentWordIndex + 1)
					setSelectedDefinition(null)
					setHasAnsweredIncorrectly(false)
				}
			}, 1500)
		} else {
			setHasAnsweredIncorrectly(true)
			setShowDialog(true)
		}
	}

	const handleNextWord = () => {
		setShowDialog(false)
		setSelectedDefinition(null)
	}

	// Reset selection when dialog is closed
	const handleDialogChange = (open: boolean) => {
		setShowDialog(open)
		if (!open) {
			setSelectedDefinition(null)
		}
	}

	// Reset selection when word changes
	useEffect(() => {
		setSelectedDefinition(null)
	}, [currentWordIndex])

	if (words.length === 0) {
		return (
			<div className="container flex items-center justify-center min-h-[60vh] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<Card className="w-full max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle>Loading Quiz...</CardTitle>
						<CardDescription>
							Please wait while we prepare your words.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		)
	}

	if (isGameComplete) {
		return (
			<div className="container flex items-center justify-center min-h-[60vh] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<Card className="w-full max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle>Quiz Complete!</CardTitle>
						<CardDescription>Here's how you did</CardDescription>
					</CardHeader>
					<CardContent className="text-center">
						<p className="text-4xl font-bold mb-4">{score} points</p>
						<p className="text-muted-foreground">
							{score >= 300
								? "Amazing! You're practically Gen Alpha!"
								: score >= 220
								? "Great job! You're getting there!"
								: "Keep practicing! You'll get better!"}
						</p>
					</CardContent>
					<CardFooter className="flex justify-center">
						<Button onClick={() => window.location.reload()}>Try Again</Button>
					</CardFooter>
				</Card>
			</div>
		)
	}

	return (
		<div className="container py-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-2xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<div className="text-sm font-medium">
						Word {currentWordIndex + 1} of {words.length}
					</div>
					<div className="text-sm font-medium">Score: {score}</div>
				</div>

				<Card className="mb-8">
					<CardHeader>
						<CardTitle className="text-center text-3xl">
							{currentWord.word}
						</CardTitle>
						<CardDescription className="text-center">
							Select the correct definition
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						{currentWord.definitions.map((def, index) => (
							<Button
								key={index}
								variant="outline"
								className={`w-full p-4 h-auto text-left whitespace-normal ${
									selectedDefinition === index
										? def.correct
											? 'bg-green-500/10 hover:bg-green-500/20 border-green-500'
											: 'bg-red-500/10 hover:bg-red-500/20 border-red-500'
										: ''
								}`}
								onClick={() => handleAnswerClick(index)}
								disabled={selectedDefinition !== null}
							>
								{def.definition}
							</Button>
						))}
					</CardContent>
				</Card>

				<Dialog open={showDialog} onOpenChange={handleDialogChange}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Incorrect Answer</DialogTitle>
							<DialogDescription>
								That's not quite right. Try again! You'll get 5 points for a
								correct answer on your next try.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button onClick={handleNextWord}>Try Again</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}

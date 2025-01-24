import {
	Brain,
	Trophy,
	Zap,
	MessageCircle,
	TrendingUp,
	Lock,
} from 'lucide-react'

const features = [
	{
		name: 'Free Starter Pack',
		description:
			'Get started with 10 essential Gen Alpha slang words, completely free.',
		icon: Brain,
	},
	{
		name: 'Interactive Learning',
		description: 'Learn through engaging quizzes and real-world examples.',
		icon: Trophy,
	},
	{
		name: 'Instant Feedback',
		description:
			'Get immediate feedback on your answers and track your progress.',
		icon: Zap,
	},
	{
		name: 'Better Communication',
		description: 'Bridge the generation gap and connect better with Gen Alpha.',
		icon: MessageCircle,
	},
	{
		name: 'Stay Updated',
		description: 'Regular updates with new trending words and expressions.',
		icon: TrendingUp,
	},
	{
		name: 'Premium Content',
		description:
			'Access our full library of words and expressions with premium.',
		icon: Lock,
	},
]

export function Features() {
	return (
		<div className="container py-8" id="features">
			<div className="mx-auto max-w-2xl lg:text-center">
				<h2 className="text-base font-semibold leading-7 text-primary">
					Features
				</h2>
				<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
					Everything you need to understand Gen Alpha
				</p>
				<p className="mt-6 text-lg leading-8 text-muted-foreground">
					Our comprehensive platform helps you stay connected with the younger
					generation through interactive learning and real-world examples.
				</p>
			</div>
			<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{features.map((feature) => (
						<div key={feature.name} className="flex flex-col">
							<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 justify-center">
								<feature.icon
									className="h-5 w-5 flex-none text-primary"
									aria-hidden="true"
								/>
								{feature.name}
							</dt>
							<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
								<p className="flex-auto text-center">{feature.description}</p>
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

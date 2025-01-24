'use client'

import Link from 'next/link'
import { Brain, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const navItems = [
		{ href: '/quiz', label: 'Quiz' },
		// { href: "/#features", label: "Features" },
		// { href: "/#pricing", label: "Pricing" },
	]

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="container flex h-14 items-center max-w-[1400px] mx-auto">
				<div className="mr-4 flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<Brain className="h-6 w-6" />
						<span className="font-bold">W Aura</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="flex-1 items-center justify-between space-x-2 md:justify-end hidden md:flex">
					<div className="flex items-center space-x-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm font-medium transition-colors hover:text-primary"
							>
								{item.label}
							</Link>
						))}
					</div>
					<div className="flex items-center space-x-2">
						<ModeToggle />
						<Button variant="default" size="sm" asChild>
							<Link href="/quiz">Get Started</Link>
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="flex-1 justify-end md:hidden flex">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[240px] sm:w-[300px]">
							<div className="flex flex-col gap-4 py-4">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-sm font-medium transition-colors hover:text-primary"
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</Link>
								))}
								<div className="flex flex-col gap-2 pt-4">
									<ModeToggle />
									<Button variant="default" size="sm" asChild>
										<Link href="/quiz" onClick={() => setIsOpen(false)}>
											Get Started
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	)
}

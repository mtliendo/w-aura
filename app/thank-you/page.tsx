import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYou() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Thank You for Your Purchase!</CardTitle>
          <CardDescription>
            Welcome to the W Aura Premium family
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We've sent your temporary password to your email address.
            Please check your inbox and spam folder.
          </p>
          <p className="text-muted-foreground">
            You now have access to our complete library of Gen Alpha slang words and expressions.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/quiz">
            <Button size="lg">Start Learning Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
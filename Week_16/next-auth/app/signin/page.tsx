import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { signIn } from "next-auth/react"

export default function Component() {
  return (
    <div className="grid max-w-sm gap-4 px-4 mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <Separator className="my-8" />
        <div className="space-y-4">
          <Button className="w-full" variant="outline">
            Sign in with Google
          </Button>
          <Button className="w-full" variant="outline">
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}

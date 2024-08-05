import { Avatar } from '@mui/material'
import { Input } from "@headlessui/react";

function Login() {
  return (
    <div className="max-w-[225px] w-full">
        <div className="bg-lime-500 text-white p-2 h-12 flex gap-2 items-center">
          <Avatar />
          <div className="font-semibold">YOUR CLUB PROFILE</div>
        </div>
        <div>
          <Input
            name="login"
            className="w-full my-3 bg-gray-300 placeholder:text-neutral-600 px-4"
            type="email"
            placeholder="email"
          />
          <Input
            name="password"
            className="w-full bg-gray-300 placeholder:text-neutral-600 px-4"
            type="password"
            placeholder="password"
          />
          <Input
            name="submit"
            className="w-full my-3 bg-lime-500 text-white cursor-pointer px-4"
            type="submit"
          />
          <div className="text-xs cursor-pointer text-lime-500 underline">
            I forgot my password
          </div>
          <div className="text-xs cursor-pointer text-lime-500 underline">
            sign up
          </div>
        </div>
      </div>
  )
}

export default Login
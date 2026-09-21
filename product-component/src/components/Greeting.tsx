import type { GreetingProps } from "../types"

export const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      {props.isVip && <p>Thanks for being a VIP member!</p>}
    </div>
  )
}

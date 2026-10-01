import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { login, logout } from '../store/userSlice'

export default function Header() {
  const { name, isLoggedIn } = useSelector((state: RootState) => state.user)
  const count = useSelector((state: RootState) => state.cart.count)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <header className="flex flex-wrap items-center gap-4 rounded border border-gray-300 p-4">
      <span>Cart: {count}</span>
      {isLoggedIn ? (
        <>
          <span>Welcome, {name}</span>
          <button
            type="button"
            className="cursor-pointer rounded border border-gray-300 px-3 py-1"
            onClick={() => dispatch(logout())}
          >
            Log out
          </button>
        </>
      ) : (
        <button
          type="button"
          className="cursor-pointer rounded bg-gray-900 px-3 py-1 text-white"
          onClick={() => dispatch(login('Alex'))}
        >
          Log in
        </button>
      )}
    </header>
  )
}

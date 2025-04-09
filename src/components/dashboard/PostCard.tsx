export default function PostCard() {
  return (
    <div className="card bg-base-100 p-8 border border-neutral-200">
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="ring-red-500 ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <h2 className="font-bold text-lg">name</h2>
        <h2 className="text-lg font-light">@username</h2>
      </div>

      <p className="py-2">
        A card component has a figure, a body part, and inside body there are title and actions parts
      </p>

      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
    </div>
  )
}

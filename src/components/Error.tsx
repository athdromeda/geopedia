const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-red-500 min-h-48">
      <img src="/x-circle.svg" alt="loading icon" className="mb-2" />
      Oops! Something went wrong...
    </div>
  )
}

export default Error
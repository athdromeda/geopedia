const Loading = () => {
  return (
    <div className="h-full min-h-48 animate-pulse w-full flex flex-col items-center justify-center">
      <img src="/loader.svg" alt="loading icon" className="animate-spin mb-2" />
      Loading Data...
    </div>
  );
};

export default Loading;

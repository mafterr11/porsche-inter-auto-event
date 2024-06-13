const SuccessMessage = () => {
  const handleRestart = () => {
    window.location.reload(); // This will refresh the page
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-white">Succes!</h2>
      <p className="text-neutral-300">Ați transmis informațiile cu succes</p>
      <button
        onClick={handleRestart}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Acasă
      </button>
    </div>
  );
};

export default SuccessMessage;

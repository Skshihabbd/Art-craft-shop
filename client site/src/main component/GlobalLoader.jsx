// src/components/GlobalLoader.jsx
const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="loader border-4 border-t-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default GlobalLoader;

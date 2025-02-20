// components/layout/BackgroundEffect.jsx
const BackgroundEffect = () => {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff2764] opacity-10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d0ff] opacity-10 blur-[120px] animate-pulse" />
      </div>
    );
  };
  export default BackgroundEffect;
  
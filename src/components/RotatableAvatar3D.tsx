const RotatableAvatar3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <img 
        src="/lovable-uploads/5bb3e4fc-3a75-419e-a173-8ebc2607d65e.png" 
        alt="Body shape silhouette - front view"
        className="h-full max-h-60 lg:max-h-80 w-auto object-contain"
      />
    </div>
  );
};

export default RotatableAvatar3D;
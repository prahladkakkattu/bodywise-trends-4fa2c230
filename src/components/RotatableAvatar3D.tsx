const RotatableAvatar3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <img 
        src="/lovable-uploads/446e7a9e-12e8-4801-9611-e0e52600bcb3.png" 
        alt="Body shape silhouette - front view"
        className="h-full max-h-60 lg:max-h-80 w-auto object-contain"
      />
    </div>
  );
};

export default RotatableAvatar3D;
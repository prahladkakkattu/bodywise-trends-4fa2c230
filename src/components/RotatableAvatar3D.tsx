const RotatableAvatar3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <img 
        src="/lovable-uploads/fa789694-790e-4255-85c2-2d1984f709e2.png" 
        alt="Body shape silhouette - front view"
        className="h-full max-h-60 lg:max-h-80 w-auto object-contain"
      />
    </div>
  );
};

export default RotatableAvatar3D;
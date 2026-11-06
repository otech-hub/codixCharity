export const ImageGalaryView = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.length > 0 &&
        images.slice(0, 6).map((img, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-slate-700 shadow-xl shadow-slate-950/40"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[268px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      <div className="col-span-3 flex justify-center gap-4">
        {images.length > 0 &&
          images.slice(6).map((img, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border border-slate-700 shadow-xl shadow-slate-950/40 w-[30%]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[268px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

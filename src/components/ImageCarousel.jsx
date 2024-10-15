const ImageCarousel = () => {
  const images = [
    {
      src: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
      alt: "Card 1",
    },
    {
      src: "https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg",
      alt: "Card 2",
    },
    {
      src: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png",
      alt: "Card 3",
    },
    { src: "https://100x-b-mcdn.akamai.net.in/images/ds.jpeg", alt: "Card 4" },
    {
      src: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png",
      alt: "Card 5",
    },
  ];

  return (
    <div className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <ul className="flex animate-fadeIn  shrink-0 flex-nowrap gap-4 py-4 hover:[animation-play-state:paused] --animation-direction: forwards; --animation-duration: 40s ">
        {[...images, ...images].map((image, index) => (
          <li
            key={index}
            className="relative max-w-[24rem] flex-shrink-0 rounded-xl"
          >
            <a
              href="https://harkirat.classx.co.in/new-courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-video rounded-2xl border-2 border-primary/10 object-cover transition-all duration-300 hover:-translate-y-2 hover:border-primary/20"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCarousel;

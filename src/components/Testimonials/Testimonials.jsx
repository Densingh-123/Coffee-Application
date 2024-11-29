import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "I love having green tea every morning. It's refreshing and energizing!",
    img: "https://picsum.photos/101/101",
    stars: 5,
  },
  {
    id: 2,
    name: "Sabir Ali",
    text: "The cappuccino here is amazing! Perfect balance of coffee and milk.",
    img: "https://picsum.photos/102/102",
    stars: 4,
  },
  {
    id: 3,
    name: "Dipankar Kumar",
    text: "I’m a big fan of the herbal tea. It has such a calming effect!",
    img: "https://picsum.photos/104/104",
    stars: 5,
  },
  {
    id: 4,
    name: "Satya Narayan",
    text: "The black coffee is strong, just the way I like it. It really wakes me up.",
    img: "https://picsum.photos/103/103",
    stars: 4,
  },
  {
    id: 5,
    name: "Arpita Roy",
    text: "I enjoy their chai latte. It has just the right amount of spices.",
    img: "https://picsum.photos/105/105",
    stars: 5,
  },
  {
    id: 6,
    name: "Manisha Verma",
    text: "The iced coffee is my go-to during summers, so refreshing!",
    img: "https://picsum.photos/106/106",
    stars: 4,
  },
  {
    id: 7,
    name: "Rohit Sharma",
    text: "The masala tea is perfect for relaxing after a long day.",
    img: "https://picsum.photos/107/107",
    stars: 5,
  },
  {
    id: 8,
    name: "Anjali Gupta",
    text: "I love the smooth and rich flavor of their espresso shots.",
    img: "https://picsum.photos/108/108",
    stars: 5,
  },
  {
    id: 9,
    name: "Rahul Singh",
    text: "Their green tea with honey is my daily detox drink.",
    img: "https://picsum.photos/109/109",
    stars: 4,
  },
  {
    id: 10,
    name: "Priya Mehta",
    text: "A big fan of the caramel macchiato! It’s the perfect blend of sweet and strong.",
    img: "https://picsum.photos/110/110",
    stars: 5,
  },
  {
    id: 11,
    name: "Vikram Rathore",
    text: "The iced latte is my favorite! A great balance of flavors.",
    img: "https://picsum.photos/111/111",
    stars: 4,
  },
  {
    id: 12,
    name: "Suman Das",
    text: "Nothing beats the warmth and aroma of their chai tea.",
    img: "https://picsum.photos/112/112",
    stars: 5,
  },
  {
    id: 13,
    name: "Madhuri Sen",
    text: "I can’t get enough of their mocha—it’s a perfect mix of coffee and chocolate!",
    img: "https://picsum.photos/113/113",
    stars: 4,
  },
  {
    id: 14,
    name: "Abhay Mishra",
    text: "The cold brew is fantastic, especially on a hot day.",
    img: "https://picsum.photos/114/114",
    stars: 5,
  },
  {
    id: 15,
    name: "Pooja Kumar",
    text: "Their lemon tea is great for a quick refreshment, especially during meetings.",
    img: "https://picsum.photos/115/115",
    stars: 4,
  },
];

const StarRating = ({ stars }) => {
  const starElements = [];
  for (let i = 0; i < stars; i++) {
    starElements.push(<span key={i}>⭐</span>);
  }
  return <div className="text-yellow-500 text-lg flex justify-end">{starElements}</div>;
};

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  {/* Star Rating in the top-right */}
                  <div className="absolute top-4 right-4">
                    <StarRating stars={data.stars} />
                  </div>
                  {/* Image section */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

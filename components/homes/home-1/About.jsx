"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-image.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h4">About US</h4>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam
          provident quidem quasi hic placeat sit, illum corporis perferendis
          nesciunt facere voluptas tempore, expedita alias tenetur dolor
          eligendi est dolorem voluptatibus? Deleniti totam magni, similique,
          eum et unde sed rerum, veritatis alias minus officiis architecto fuga.
          Architecto, odio! Excepturi, tenetur. Voluptatum optio aspernatur
          quibusdam at modi. Numquam quidem velit cumque, quod a dicta obcaecati
          nostrum?
        </p>
      </div>
      <div className="col-lg-6 col-xl-3 offset-xl-1 mt-5">
        <h4 className="h5">Our Vision</h4>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatem eligendi molestiae esse non dicta quam repellendus
          deleniti. Blanditiis, sunt!
        </p>
      </div>
      <div className="col-lg-6 col-xl-3 offset-xl-1 mt-5">
        <h4 className="h5">Our Mission</h4>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatem eligendi molestiae esse non dicta quam repellendus
          deleniti. Blanditiis, sunt!
        </p>
      </div>
      <div className="col-lg-6 col-xl-3 offset-xl-1 mt-5">
        <h4 className="h5">Our Message</h4>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatem eligendi molestiae esse non dicta quam repellendus
          deleniti. Blanditiis, sunt!
        </p>
      </div>
    </div>
  );
}

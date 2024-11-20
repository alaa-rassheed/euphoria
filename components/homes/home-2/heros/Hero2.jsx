"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import TypeWriter from "@/components/common/TypeWriter";
import { useTranslations } from "next-intl";

export default function Hero2({ dark, mainSlider }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMuteUnmute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const t = useTranslations("common");
  return (
    <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
      {/* Background Video */}
      {/* Please replace the video file in folder "video" with your own file */}
      <div className="bg-video-wrapper">
        <video
          ref={videoRef}
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src={mainSlider?.video} type="video/mp4" />
        </video>
        {dark ? (
          <div className="bg-video-overlay bg-dark-alpha-90"></div>
        ) : (
          <div className="bg-video-overlay bg-light-alpha-90" />
        )}
      </div>
      <a
        onClick={toggleMuteUnmute}
        href="#"
        role="button"
        className="bg-video-button-muted"
      >
        <i className={`mi-volume-${isMuted ? "up" : "off"}`} />
        <span className="visually-hidden">Volume On</span>
      </a>
      <a
        onClick={togglePlayPause}
        href="#"
        role="button"
        className="bg-video-button-pause"
      >
        <i className={`mi-${isPlaying ? "pause" : "play"}`} />
        <span className="visually-hidden">Pause</span>
      </a>

      {/* End Background Video */}
      {/* Home Section Content */}
      <div className="home-content text-center">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-8 d-flex align-items-center mb-md-60">
            <div className="w-100 text-center text-lg-start">
              <h2 className="section-title-tiny font-alt mb-30 mb-sm-20 wow fadeInUp">
                {mainSlider?.title}
              </h2>
              <h1
                className="hs-title-13a font-alt mb-50 mb-sm-30 wow fadeRotateIn"
                data-wow-delay="0.2s"
              >
                <div dangerouslySetInnerHTML={{ __html: mainSlider.text }} />
                <TypeWriter strings={[`${mainSlider?.title2}`]} colorClass="" />
              </h1>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.5s"
                data-wow-offset={0}
              >
                <a
                  href="#portfolio"
                  className={`btn btn-mod ${
                    dark ? "btn-w" : ""
                  }  btn-medium btn-circle`}
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">
                      {t("view_projects")}
                    </span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {t("view_projects")}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Image */}
          <div className="col-10 offset-1 col-lg-4 offset-lg-0 d-flex align-items-center">
            <div className="stack-images">
              <div
                className="stack-images-1 parallax-mousemove"
                data-offset={30}
              >
                <div
                  className="wow clipRightIn"
                  data-wow-delay="1.2s"
                  data-wow-duration="1.75s"
                >
                  <Image
                    src={mainSlider?.image}
                    alt={mainSlider?.alt_img}
                    width={600}
                    height={800}
                  />
                </div>
              </div>
              <div
                className="stack-images-2 parallax-mousemove"
                data-offset={60}
              >
                <div
                  className="wow clipRightIn"
                  data-wow-delay="1.7s"
                  data-wow-duration="1.75s"
                >
                  <Image
                    width={600}
                    height={800}
                    src={mainSlider?.image2}
                    alt={mainSlider?.alt_img2}
                  />
                </div>
              </div>
              <div
                className="stack-images-3 parallax-mousemove"
                data-offset={90}
              >
                <div
                  className="wow clipRightIn"
                  data-wow-delay="2.2s"
                  data-wow-duration="1.75s"
                >
                  <Image
                    width={600}
                    height={800}
                    src={mainSlider?.banner}
                    alt={mainSlider?.alt_banner}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Image */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-4">
            <i className="icon-arrow-down1 size-22" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}

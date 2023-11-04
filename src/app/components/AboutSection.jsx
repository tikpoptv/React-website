import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [bounceCount, setBounceCount] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleBounce = () => {
    if (bounceCount < 5) {
      setBounceCount(bounceCount + 1);
    } else {
      setIsBouncing(false); // เมื่อเด้งครบ 5 ครั้งให้หยุดเอฟเฟกต์ bounce
      setShowAboutSection(true); // แสดงส่วน About Me
    }
  };

  useEffect(() => {
    if (showAboutSection && bounceCount < 5) {
      // ทำการเด้งเมื่อแสดงครั้งแรกและยังไม่ถึง 5 ครั้ง
      setIsBouncing(true);
      handleBounce();
    }
  }, [showAboutSection]);

  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกโหลดเสร็จ ให้แสดงส่วน About Me
    setShowAboutSection(true);
  }, []);

  const handleScrollToAbout = () => {
    // ลองหน้าจอไปยังส่วน About Me
    window.scrollTo({
      top: document.querySelector("#about").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`text-white about-section ${isBouncing ? "bounce" : ""}`}
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative w-300 h-300">
          <Image src="/images/a.jpg" layout="responsive" width={300} height={300} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-center">
              <p className="text-lg mb-4">Name:</p>
              <p className="text-lg mb-4">Date of birth:</p>
              <p className="text-lg mb-4">Personal Email:</p>
              <p className="text-lg mb-4">University Email:</p>
              <p className="text-lg mb-4">Phone:</p>
              <p className="text-lg mb-4">Faculty:</p>
              <p className="text-lg mb-4">University:</p>
            </div>
            <div className="justify-center">
              <p className="text-lg mb-4">Nutthawut Jaroenchokwittaya</p>
              <p className="text-lg mb-4">January 24, 2004</p>
              <p className="text-lg mb-4"><a href="mailto:tik.jedsdp@gmail.com">tik.jedsdp@gmail.com</a></p>
              <p className="text-lg mb-4"><a href="mailto:jedsadaporn.pann@kmutt.ac.th">jedsadaporn.pann@kmutt.ac.th</a></p>
              <p className="text-lg mb-4"><a href="tel:0638014142">063 801 4142</a></p>
              <p className="text-lg mb-4">Computer Engineer</p>
              <p className="text-lg mb-4">King Mongkut's University of Technology Thonburi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import style from "src/styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main className={style["about-container"]}>
      <div className={style["about-content-container"]}>
        <h2 className={style["about-content-title"]}>We Create Digital Ideas that are bigger, bolder, brave and better</h2>
        <p className={style["about-content-text"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia nesciunt esse ratione similique at consectetur totam, minus et rerum, nam impedit, eligendi eos distinctio quae perspiciatis. Laboriosam, nulla labore.
        </p>
        <div className={style["about-data-container"]}>
          <div className={style["data-container"]}>
            <span className={style["data-title"]}>10+</span>
            <span className={style["data-text"]}>Years of Experience</span>
          </div>
          <div className={style["data-container"]}>
            <span className={style["data-title"]}>10+</span>
            <span className={style["data-text"]}>Years of Experience</span>
          </div>
          <div className={style["data-container"]}>
            <span className={style["data-title"]}>10+</span>
            <span className={style["data-text"]}>Years of Experience</span>
          </div>
        </div>
      </div>
      <div className={style["about-image-container"]}>
        <Image src="/about.png" alt="A person analyzing some data" fill loading="eager" />
      </div>
    </main>
  )
}
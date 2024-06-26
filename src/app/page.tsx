import style from "src/styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={style["home-container"]}>
      <div className={style["home-content-container"]}>
        <h2 className={style["home-content-title"]}>Creative Thoughts Agency</h2>
        <p className={style["home-content-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic inventore doloribus, numquam voluptatum corrupti. Ipsam, suscipit quis. Totam impedit consectetur, laborum blanditiis magnam repudiandae minima facilis? Animi, perferendis molestias!
        </p>
        <div className={style["home-buttons-container"]}>
          <button className={`${style["home-button"]} ${style["main"]}`}>Learn More</button>
          <button className={style["home-button"]}>Contact</button>
        </div>
        <div className={style["home-brands-container"]}>
          <Image src="/images/brands.png" alt="Brands logos" fill priority={true} />
        </div>
      </div>
      <div className={style["home-image-container"]}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
      </div>
    </main>
  )
}

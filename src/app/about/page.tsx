import style from "src/styles/about.module.css";
import Image from "next/image";
import DataBox from "src/components/atoms/DataBox/DataBox";

const dataList = [
  {
    title: "10+",
    text: "Years of Experience"
  },
  {
    title: "10+",
    text: "Years of Experience"
  },
  {
    title: "10+",
    text: "Years of Experience"
  }
]

export default function About() {
  return (
    <main className={style["about-container"]}>
      <div className={style["about-content-container"]}>
        <h2 className={style["about-content-title"]}>We Create Digital Ideas that are bigger, bolder, brave and better</h2>
        <p className={style["about-content-text"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia nesciunt esse ratione similique at consectetur totam, minus et rerum, nam impedit, eligendi eos distinctio quae perspiciatis. Laboriosam, nulla labore.
        </p>
        <div className={style["about-data-container"]}>
          {dataList.map((item, index) => {
            return <DataBox title={item.title} text={item.text} key={index} />
          })}
        </div>
      </div>
      <div className={style["about-image-container"]}>
        <Image src="/images/about.png" alt="A person analyzing some data" fill priority={true} />
      </div>
    </main>
  )
}
import Image from "next/image";
import style from "src/styles/contact.module.css";

export default function Contact() {
  return (
    <main className={style["contact-container"]}>
      <div className={style["contact-image-container"]}>
        <Image src="/contact.png" alt="A persona filling a form" fill loading="eager" />
      </div>
      <form className={style["contact-form-container"]}>
        <input className={style["form-input"]} type="text" placeholder="Full Name" />
        <input className={style["form-input"]} type="email" placeholder="Email address" />
        <input className={style["form-input"]} type="tel" placeholder="Phone Number (optional)" />
        <textarea className={style["form-textarea"]} placeholder="Message"></textarea>
        <button className={style["form-button"]}>Send</button>
      </form>
    </main>
  )
}
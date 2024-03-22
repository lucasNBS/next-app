import Image from "next/image";
import Input from "src/components/atoms/Input/Input";
import style from "src/styles/contact.module.css";

export default function Contact() {
  return (
    <main className={style["contact-container"]}>
      <div className={style["contact-image-container"]}>
        <Image src="/images/contact.png" alt="A persona filling a form" fill priority={true} />
      </div>
      <form className={style["contact-form-container"]}>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email address" />
        <Input type="tel" placeholder="Phone Number (optional)" />
        <textarea className={style["form-textarea"]} placeholder="Message"></textarea>
        <button className={style["form-button"]}>Send</button>
      </form>
    </main>
  )
}
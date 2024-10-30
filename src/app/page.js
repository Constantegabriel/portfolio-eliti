import Image from "next/image";
import Link from "next/link";
import styles from "./styles.modules.css"

export default function Home() {
  return (
  
<section className="eueueu">
  <Link href={'./sobre-eu'}><button className="botao">sobre</button></Link>
  <Link href={'./serviços'}><button className="botao">serviços</button></Link>
  <Link href={'./trabalhos'}><button className="botao">trabalhos</button></Link>
  <Link href={'./contatos'}><button className="botao">contatos</button></Link>

</section>

  )
}

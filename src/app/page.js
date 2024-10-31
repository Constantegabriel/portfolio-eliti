import Image from "next/image";
import Link from "next/link";
import styles from "./styles.modules.css"

export default function Home() {
  return (
  
<section>
  <div className="barra">
  <ul className="lista">
  <li><Link href={'./sobre-eu'} className="link-sobre"><button className="botao">sobre</button></Link></li>
  <li><Link href={'./servicos'} className="link-serviços"><button className="botao">serviços</button></Link></li>
  <li><Link href={'./trabalhos'} className="link-trabalhos"><button className="botao">trabalhos</button></Link></li>
  <li><Link href={'./contatos'} className="link-contatos"><button className="botao">contatos</button></Link></li>
</ul>
</div>


<div className="div2">
<h1>Welcome</h1>


</div>
</section>


)
}

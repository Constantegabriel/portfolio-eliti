import Link from "next/link";

export default function Home() {
    return (

    <section>
        <Link href={'/'}><button className="page-sobre">back</button></Link>
    </section>
    )
}
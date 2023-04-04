import Link from 'next/link';

export default function Home() {
  return (
     <div> 
    {/* text-color= */}
      <center >
        <h1 >Hello World !<br /></h1>
        <h4>from <br /></h4>
        <h2> <b> Humera Aslam</b></h2>
        <br/>
        <Link href="/zia">Go to Zia page</Link>
        <br/>
        <Link href="/zeeshan">Go to Zeeshan page</Link>
        <br/>
        <Link href="/hira">Go to Hira page</Link>
        <br/>
        <Link href="/Sonia">Go to Sonia page</Link>
        </center>
    </div>
  )
}

import { NextPage } from 'next';

import SizeBox from '@/Components/SizeBox';

type pageProps = {

}
``
const page: NextPage<pageProps> = () => {
    return (
    <main className="p-14">
        <h1>FootLocker Mock!!! @_@</h1>

        <SizeBox className="h-10" />

        <h2>Summary</h2>
        <SizeBox className="h-5" />
        <p className="text-zinc-300 text-center">
        &quot;The project contains two classes, Shoe and ShoeCompany, the Shoe class can be used to create a shoe model like “Air Force 1”, and ShoeCompany (like the Nike brand) holds a series of Shoes. In Main, there is a demonstration of what the two classes can do. At first, we can make some shoe models, and construct a ShoeCompany with the shoes. The ShoeCompany has methods that let customers buy shoes in three different ways: buy the specific shoe, buy the cheapest, or buy the most expensive one. Also for holidays, the ShoeCompany can also trigger the bonus function, which would give a customer a random shoe for free! The Shoe class has a name, particular sizes, and an integer of how much is sold. The price of the shoe, however, is not predetermined but dynamically depends on the amount already sold, the more the shoe has sold, the more popular and rare the shoe gets, therefore the price would be higher.&quot;
        </p>

        <SizeBox className="h-10" />

        <h2>UML Diagram</h2>
        

    </main>
    );
}

export default page;
import { FC } from 'react';
import Image from 'next/image';

import SizeBox from '@/Components/SizeBox';


const Implementations: FC = (): JSX.Element => {
    return (
    <>
        <h2 className='text-zinc-200'>Implementations!</h2>
        <h3 className='text-zinc-200'>1)</h3>
        <Image width={500} height={0} src="/Buy.png" alt="Buying mid shoes" />
        <SizeBox className='h-5' />
        <p className="text-center text-zinc-200">
            By calling the &quot;Buy&quot; method, the program will display all the available sizes of a certain shoe that a company produces.
            Then the users would be prompted to purchase their desired product and sizes, the price will be calculated dynamically just like FootLocker!
        </p>

        <SizeBox className='h-10' />

        <h3 className='text-zinc-200'>2)</h3>
        <Image width={500} height={0} src="/RandomFree.png" alt="Randomly get one for free (BONUS!!!)" />
        <SizeBox className='h-5' />
        <p className="text-center text-zinc-200">
            This method is called whenever it is a special day (new year or the user&apos;s birthday for example),
            the user would receive a randomly generated shoe of a random available size for freeeeeeee!!!
        </p>
    </>
    );
};

export default Implementations;
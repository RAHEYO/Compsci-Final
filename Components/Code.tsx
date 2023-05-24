import { FC } from 'react';
import Image from 'next/image';

import SizeBox from '@/Components/SizeBox';


const Code: FC = (): JSX.Element => {
    return (
        <>
            <h2 className='text-zinc-200'>Code</h2>
            
            <SizeBox className="h-5" />
            
            <h3 className="text-zinc-200">Main</h3>
            <Image width={700} height={1200} className="object-cover" quality={100} src="/Main.png" alt="Main" />
            
            <SizeBox className="h-5" />

            <h3 className="text-zinc-200">Shoe Company (Has-A Shoe)</h3>
            <Image width={600} height={1400} className="object-cover" quality={100} src="/ShoeCompany.png" alt="Shoe Company" />
            
            <SizeBox className="h-5" />
            
            <h3 className="text-zinc-200">Wearable Interface</h3>
            <Image width={250} height={100} className="object-cover" quality={100} src="/Wearable.png" alt="Wearable Interface" />
            
            <SizeBox className="h-5" />
            
            <h3 className="text-zinc-200">Shoe</h3>
            <Image width={700} height={1350} className="object-cover" quality={100} src="/Shoe.png" alt="Shoe" />
        
            <SizeBox className="h-5" />
            
            <h3 className="text-zinc-200">Jordan (Is-A Shoe)</h3>
            <Image width={250} height={150} src="/Jordan.png" quality={100} alt="Jordan Shoe" />
        </>
    );
};

export default Code;
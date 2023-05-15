import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SizeBox from '@/Components/SizeBox';
import ProjectList from '@/Components/ProjectList';

type myHomeProps = {

}

const MyHome: NextPage<myHomeProps> = () => {
    return (
    <div className="w-screen h-screen">
        <div className="relative w-screen h-2/5 overflow-clip">
            <Image fill className="object-cover" src="/Eniac.png" alt="Eniac Computer" />

            <h1 className="absolute w-full text-center top-1/2">Ryan Wang&apos;s Amazing Year @ C106</h1>
        </div>

        <main className="p-lg">
            <h1>Memories</h1>
            <div className="grid gap-4">

            </div>

            <SizeBox className='h-5' />
            
            <ProjectList />
        </main>

    </div>
    );
}

export default MyHome;
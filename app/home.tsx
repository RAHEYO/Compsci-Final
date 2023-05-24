import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SizeBox from '@/Components/SizeBox';
import ProjectList from '@/Components/ProjectList';

type myHomeProps = {

}

const MyHome: NextPage<myHomeProps> = () => {
    return (
    <div className="w-screen h-screen bg-white">
        <div className="relative w-screen h-2/5 overflow-clip">
            <Image fill className="object-cover" src="/Eniac.png" alt="Eniac Computer" />

            <h1 className="absolute text-black w-full text-center top-1/2">Ryan Wang&apos;s Amazing Year @ C106</h1>
        </div>

        <main className="p-lg bg-white">
            <Link href="https://www.linkedin.com/in/haoyu-wang-460999206/">
                <h1 className='text-zinc-200 underline'>Ryan&apos;s Profile with Memories! (Click here to LinkedIn)</h1>
            </Link>
            {/* <div className="grid gap-4">

            </div> */}
            <SizeBox className="h-5" />
            <div className='flex flex-row justify-center content-center'>
                <Image width={400} height={600} className='rounded-3xl' src="/Alpha.jpg" alt="Mr.Great-Alpha" />
                <SizeBox className="w-[100px]" />
                <p className="self-center text-zinc-200">
                    - Ryan Wang is a curious 10th grade software engineer taking AP Computer Science class @ Burlingame High School.
                    For no reason, he smiles a lot, something that he cannot really control.
                    His iconic smile is often a reflection of his optimistic mindset for everything that he encounters,
                    rarely you see him completely stressed out and complain in the public.
                    With full of energy to enjoy his personal life, he is motivated to accomplish the most challenging and meanful goals with a postive attitude~ @_@
                </p>
            </div>

            <SizeBox className='h-10' />
            
            <ProjectList />
        </main>

    </div>
    );
}

export default MyHome;
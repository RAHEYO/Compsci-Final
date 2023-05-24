import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SizeBox from '@/Components/SizeBox';

const ProjectList: FC = (): JSX.Element => {
    return (
    <>
        <h1 className='text-zinc-200'>Project</h1>
                
            <SizeBox className="h-5" />

            <Link href="/Projects">
                <div className="flex flex-row items-center rounded-3xl border-b-2 border-zinc-400 p-md">
                    <div className='relative w-[320px] h-[180px] overflow-clip'>
                        <Image fill className="object-cover" src="/FootLocker.png" alt="FootLocker" />
                    </div>

                    <SizeBox className="w-14" />
                    
                    <div>
                        <h2 className='text-zinc-200'>FootLocker Mock</h2>
                        <SizeBox className="h-3" />
                        <p className="text-zinc-400">
                            A Java program that models how FootLocker categorizes shoes by their brand~
                        </p>
                    </div>
                </div>
            </Link>
    </>
    );
};

export default ProjectList;
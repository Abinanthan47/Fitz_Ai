
import Stepper from '../../components/Stepper';

const Page = () => {
  return (
    
<div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-14'>
    <h2 className='flex justify-center text-2xl font-medium'>Complete your profile</h2>
    <p className=' flex justify-center mt-3  text-gray-500'>Just provide some information for personalized plan</p>
<div className='max-w-4xl '>
        <Stepper/>
</div>
</div>
    
  );
};

export default Page;

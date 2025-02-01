import '../src/index.css';
import ilustrationConsistentSchendule from '../src/assets/images/illustration-multiple-platforms.webp'
import ilustrationFiveStarts from '../src/assets/images/illustration-five-stars.webp';
import illustrationConsistentSchenduleCalendar from '../src/assets/images/illustration-consistent-schedule.webp';
import illustrationSchedulePosts from '../src/assets/images/illustration-schedule-posts.webp';
import illustrationGrowFollowers from '../src/assets/images/illustration-grow-followers.webp';
import illustrationAudienceGrowth from '../src/assets/images/illustration-audience-growth.webp';
import illustrationCreatePost from '../src/assets/images/illustration-create-post.webp';
import ilustrationAiContent from '../src/assets/images/illustration-ai-content.webp';

function App() {
  return (
    <div className="flex items-center justify-center h-full bg-zinc-200">
      <div className="w-[1122px] lg:h-[885px] grid grid-cols-4 grid-rows-6 gap-5 max-lg:flex flex-col max-lg:px-2 py-20 font-fontMain">

        <div className="flex flex-col items-center justify-center rounded-lg bg-[#7650dc] col-span-2 row-span-2 col-start-2 row-start-1 py-10">
          <h2 className="text-white text-5xl text-center font-medium max-md:text-4xl">Social Media <span className="text-[#ffcb6b]">10x</span> <br/> <span className="italic">Faster</span> with AI</h2>
          <img className="w-48 mt-5" src={ilustrationFiveStarts} alt="Icon Stars" />
          <p className="text-white font-light mt-2">Over 4,000 5-star reviews</p>
        </div>

        <div className="flex flex-col gap-5 items-end justify-center rounded-lg bg-white row-span-2 col-start-2 row-start-3 py-4 px-6 lg:w-auto">
          <img className="shadow-2xl shadow-greey-300 opacity-80 rounded-full" src={ilustrationConsistentSchendule} alt="Img Social Media Instagram and Twitter" />
          <p className="text-3xl font-medium leading-6 max-md:text-2xl text-balance">Manage multiple accounts and platforms.</p>
        </div>

        <div className="flex flex-col justify-center rounded-lg bg-[#ffcb6b] row-span-2 col-start-3 row-start-3 px-6 border-2 border-solid pt-4 overflow-hidden min-h-[220px]">
          <p className="text-3xl font-medium leading-6 max-md:text-2xl">Maintain a consistent posting schedule.</p>
          <div className="relative w-[60%] lg:w-[80%] overflow-hidden">
            <img className="w-full h-auto transform translate-y-3 lg:translate-y-9" src={illustrationConsistentSchenduleCalendar} alt="Img Social Media Instagram and Twitter" />
          </div>
        </div>

        <div className="flex flex-col gap-7 items-center justify-center rounded-lg bg-[#dacffc] row-span-4 col-start-4 row-start-1 py-5">
          <p className='text-3xl font-semibold leading-6 pl-7'>Schedule to social media.</p>
          <div className='relative w-[80%] lg:w-[100%] overflow-hidden'>
            <img className="w-full h-auto lg:transform lg:translate-x-24 lg:scale-110" src={illustrationSchedulePosts} alt="Img Social Media Instagram and Twitter" />
          </div>
          <p className='font-semibold leading-5 text-center text-balance pl-7'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        <div className="flex gap-2 items-center justify-center rounded-lg bg-[#7650dc] col-span-2 row-span-2 col-start-3 row-start-5 px-12 py-10 max-md:flex-col">
          <img className='w-9/12 md:w-6/12' src={illustrationGrowFollowers} alt="Img graph" />
          <p className='text-white text-3xl font-semibold leading-6 mt-6 text-center'>Grow followers with non-stop content.</p>
        </div>

        <div className="flex flex-col items-start justify-evenly rounded-lg bg-white row-span-2 col-start-2 row-start-5 p-7">
          <h2 className='text-5xl font-medium'> {'>'}56% </h2>
          <p className='text-sm'>faster audience growth</p>
          <img className='w-4/6 mx-auto mt-8' src={illustrationAudienceGrowth} alt="Icon avatar" />
        </div>

        <div className="flex flex-col gap-9 items-start justify-center rounded-lg bg-[#f9eee1] row-span-3 col-start-1 row-start-1 py-10 px-7">
          <p className='text-2xl font-medium leading-6'>Create and schedule content <span className='text-[#7650dc] italic'>quicker.</span></p>
          <img className='w-9/12 md:w-7/12' src={illustrationCreatePost} alt="Img Create post" />
        </div>
        
        <div className="flex flex-col gap-9 items-center justify-center rounded-lg bg-[#ffcb6b] row-span-3 col-start-1 row-start-4 py-10">
          <p className='text-3xl font-medium leading-6 px-10'>Write your content using AI.</p>
          <img className='w-9/12 md:w-7/12' src={ilustrationAiContent} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

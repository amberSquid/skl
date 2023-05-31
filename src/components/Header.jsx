import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Header() {

    return(
        <div className='relative'>
            <Splide options={{
                type: 'fade',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                pauseOnHover: false,
                height: "40rem",
                arrows: false,
                pagination: false,
                rewind: true,
                
            }}>
                <SplideSlide>
                <img className='w-full' src="https://images.trvl-media.com/lodging/79000000/78410000/78404800/78404729/3d5462f4.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
                </SplideSlide>
                <SplideSlide>
                <img className='w-full' src="https://www.bing.com/images/blob?bcid=TpD9BhQJOKkFKA" alt="" />
                </SplideSlide>
                <SplideSlide>
                <img className='w-full' src="https://www.bing.com/images/blob?bcid=TvY1wtO7EakFSg" alt="" />
                </SplideSlide>
            </Splide>

            <div className="absolute top-0 w-full h-full flex items-center bg-slate-900/60">
                <h1 className='text-white text-center text-5xl font-bold w-full'>Book your dream Stay</h1>
            </div>

        </div>
        
    )
}
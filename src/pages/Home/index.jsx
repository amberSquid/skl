import Header from "../../components/Header"

export default function Home() {

    return(
        <div>
            <Header />

            <div className="grid grid-cols-2 gap-16 container mx-auto">
                <div>
                <h1 className="text-center">Book your Dream Stay in Qatar</h1>

                <p>At Qatar Stay we have the best and the most comfortable stay. Everything that you need to enjoy Qatar and the 2022 World Cup all in 1 place.</p>
                </div>

                <div>

                    <img src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-3/5 -rotate-12 hover:rotate-0 transition after:w-full after:h-full after:bg-blue-400 relative after:absolute after:top-0" alt="" />
                    
                </div>
            </div>
        </div>
    )

}
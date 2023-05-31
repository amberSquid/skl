import { useState, useEffect } from "react";

export default function Signup() {

    useEffect( () => {
        const endpoint = "https://restcountries.com/v3.1/all?fields=demonyms"

        fetch(endpoint)
        .then( (res) => res.json())
        .then( data =>  {
            console.log(data)

            var nats = data.map( (data, index) => {
                return data.demonyms.eng.m
            })

            //sort nats array pf strings by alphabetical order and remove duplicates
            nats.sort()
            nats = [...new Set(nats)]
            console.log(nats)

            console.log(nats)
            setNationality(nats)

        })

        
    }, [])

    const [nationality, setNationality] = useState(null)

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        nationality: "",
        email: "",
    })

    const [errors, setErrors] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        nationality: "",
        email: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        console.log(formData)

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }





    return(

        <div className="grid grid-cols-2">

        <div action="" className="p-6  border">
            <h1 className="text-3xl uppercase mb-4">Signup</h1>

            <p className="mb-6">Welcome! We glad to have you join us. <br />To get started please complete the form below.</p>
            <div className=" grid grid-cols-2 gap-y-4 ">
                <div className="form-control">
                    <label htmlFor="username">First Name</label>
                    <input 
                        type="text"
                        placeholder="Dylan"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                <div className="form-control">
                    <label htmlFor="password">Last Name</label>
                    <input type="password" 
                        placeholder="Enter Password" 
                        id="password" 
                        name="password"
                        value={formData.password}   
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                </div>

                <div className="form-control">
                    <label htmlFor="password">Email Address</label>
                    <input type="email" 
                        placeholder="Enter Password" 
                        id="password" 
                        name="password"
                        value={formData.password}   
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                </div>

                <div className="form-control">
                    <label htmlFor="password">Date Of Birth</label>
                    <input type="email" 
                        placeholder="Enter Password" 
                        id="password" 
                        name="password"
                        value={formData.password}   
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                </div>

                <div className="form-control">
                    <label htmlFor="password">Gender</label>

                    <select name="" id="">
                        <option value="Male">Male</option>    
                        <option value="Male">Female</option>    
                    </select> <br />
                   
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                </div>

                <div className="form-control">
                    <label htmlFor="password">Nationality</label>

                    <select name="" id="">
                        {
                            nationality?.map( (nats, index) => {
                                return <option value={nats} key={index}>{nats}</option>
                            })
                        }  
                    </select> <br />
                   
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                </div>



                
           </div>

           <button
                    className="text-orange-500 font-bold uppercase bg-purple-900 px-4 py-2 rounded hover:bg-orange-500 hover:text-purple-900 transition mt-4"
                    onClick={() => toast.success("User logged in")}
                >
                    Login
                </button>
        </div>

        <img src="https://images.pexels.com/photos/2417863/pexels-photo-2417863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full hidden md:block"/>
    </div>
    )

    
}
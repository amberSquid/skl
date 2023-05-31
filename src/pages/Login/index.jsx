import { useState } from "react"
import {toast} from "react-toastify"

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: 'Please enter username',
        password: 'Please enter password',
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

            <div action="" className="p-6 max-w-[400px] mx-auto">
                <h1 className="text-3xl uppercase">Login</h1>

                <p className="mb-3">Glad to have you back! Please login to continue exploring Qatar.</p>
                <div className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
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
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                            placeholder="Enter Password" 
                            id="password" 
                            name="password"
                            value={formData.password}   
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                    </div>

                    <button
                        className="text-orange-500 font-bold uppercase bg-purple-900 px-4 py-2 rounded hover:bg-orange-500 hover:text-purple-900 transition"
                        onClick={() => toast.success("User logged in")}
                    >
                        Login
                    </button>
               </div>
            </div>

            <img src="https://images.pexels.com/photos/2417863/pexels-photo-2417863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full hidden md:block"/>
        </div>
    )
}
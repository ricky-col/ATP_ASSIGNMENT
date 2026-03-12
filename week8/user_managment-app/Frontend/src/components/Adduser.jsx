// // import { useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { useNavigate } from 'react-router';


// // function Adduser() {
// //     const { register, handleSubmit, formState: { errors } } = useForm();
// //     let [error, setError] = useState(null);
// //     let [loading, setLoading] = useState(false);

// //     let navigate = useNavigate();

// //     const onUserCreate = async (newUser) => {

// //         console.log(newUser);
// //         // make post req to create new user
// //         try {
// //             setLoading(true);
// //             let res = await fetch("http://localhost:4000/user-api/user", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json"
// //                 },
// //                 body: JSON.stringify(newUser),
// //             });
// //             if (res.status === 201) {
// //                 // user created , it should navigate to userlist
// //                 navigate('/userlist')
// //             }else{
// //                 throw new Error("error occured")
// //             }
// //         } catch (err) {
// //             setError(err)
// //         } finally {
// //             setLoading(false);
// //         }
// //         if (loading) {
// //             return <p>Loading</p>
// //         }
// //         if (error) {
// //             return <p>{error.message}</p>
// //         }
// //     }

// //     return (
// //         <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-100'>
// //             <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Add new User</h1>
// //             <form action="" onSubmit={handleSubmit(onUserCreate)} className='flex flex-col gap-4'>
// //                 <input type="text" placeholder='enter username' {...register("name")} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
// //                 <input type="email" placeholder='enter email' {...register("email")} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
// //                 <input type="date" placeholder='enter DOB' {...register("dateOfBirth")} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
// //                 <input type="number" placeholder='enter mobile number' {...register("mobileNumber")} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
// //                 <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors mt-2'>submit</button>
// //             </form>
// //         </div>

// //     )
// // }

// // export default Adduser

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

// function Adduser() {
//   const { register, handleSubmit } = useForm();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onUserCreate = async (newUser) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch("http://localhost:4000/user-api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newUser)
//       });

//       const data = await res.json();

//       if (res.status === 201) {
//         navigate("/userlist");
//       } else {
//         setError(new Error(data.message));
//       }

//     } catch (err) {
//       setError(new Error("Server not reachable"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border">
//       <h1 className="text-2xl font-bold mb-6 text-center">Add New User</h1>

//       {loading && <p className="text-blue-500">Creating user...</p>}
//       {error && <p className="text-red-500">{error.message}</p>}

//       <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Enter username"
//           {...register("name")}
//           className="border p-2 rounded"
//         />

//         <input
//           type="email"
//           placeholder="Enter email"
//           {...register("email")}
//           className="border p-2 rounded"
//         />

//         <input
//           type="date"
//           {...register("dateOfBirth")}
//           className="border p-2 rounded"
//         />

//         <input
//           type="number"
//           placeholder="Enter mobile number"
//           {...register("mobileNumber")}
//           className="border p-2 rounded"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Adduser;


import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function Adduser() {
    const { register, handleSubmit } = useForm();
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const onUserCreate = async (newUser) => {

        console.log(newUser);

        try {
            setLoading(true);
            setError(null);

            let res = await fetch("http://localhost:4000/user-api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            });

            let data = await res.json();

            if (res.status === 201) {
                navigate('/userlist')
            } else {
                setError(new Error(data.message))
            }


        } catch (error) {
            setError(new Error("Server not reachable"))
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-100'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Add new User</h1>

            {/* ✅ loading & error display */}
            {loading && <p className="text-blue-500">Creating user...</p>}
            {error && <p className="text-red-500">{error.message}</p>}

            <form onSubmit={handleSubmit(onUserCreate)} className='flex flex-col gap-4'>
                <input 
                    type="text" 
                    placeholder='enter username' 
                    {...register("name")} 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' 
                />

                <input 
                    type="email" 
                    placeholder='enter email' 
                    {...register("email")} 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' 
                />

                <input 
                    type="date" 
                    {...register("dateOfBirth")} 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' 
                />

                <input 
                    type="number" 
                    placeholder='enter mobile number' 
                    {...register("mobileNumber")} 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' 
                />

                <button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors mt-2'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Adduser
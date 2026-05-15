import { useForm } from 'react-hook-form'
import { inputClass, formCard, formTitle, loadingClass, errorClass, primaryBtn } from '../styles/common.js'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate()


  const Submit = async (newUser) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Submitting user:", newUser);
      
      const formData = new FormData();
      // Ensure all fields including role are in FormData
      Object.keys(newUser).forEach((key) => {
        if (key !== "profileImageUrl") {
          formData.append(key, newUser[key]);
        }
      });
      
      // Add profilePic if it exists
      if (newUser.profileImageUrl && newUser.profileImageUrl[0]) {
        formData.append("profileImageUrl", newUser.profileImageUrl[0]);
      }

      // Determine correct API endpoint based on role
      const endpoint = newUser.role === 'AUTHOR' ? 'author-api' : 'user-api';
      console.log(`Calling ${endpoint} registration...`);

      let resobj = await axios.post(`${import.meta.env.VITE_API_URL}/${endpoint}/users`, formData);
      
      if (resobj.status === 201) {
        console.log("Registration successful:", resobj.data);
        navigate("/login");
      }
    }
    catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data?.error || err.message || "Registration failed");
    }
    finally {
      setLoading(false)
    }
  }



  //loading 
  if (loading) {
    return <p className={loadingClass}>loading</p>
  }
  //error
  if (error !== null) {
    return <p>{error.message}</p>
  }

  //make api request 
  return (
    <div className={formCard}>
      <form onSubmit={handleSubmit(Submit)}>
        <p className={formTitle}>create an account</p>
        {/* error message */}
        {error && <p className={errorClass}>{error.message}</p>}
        <p className='inline text-2xl'>Select Role</p><br />
        <input type="radio" {...register("role", { required: true })} value="USER" /><label className='m-2 text-xl'>User</label>
        <input type="radio" {...register("role", { required: true })} value="AUTHOR" /><label className='m-2 text-xl'>Author</label><br />
        {errors.role?.type === 'required' && <p className='text-red-400'>Please select a role</p>}<br />

        <input type="text" {...register("firstName", { required: true })} placeholder='First Name' className={inputClass} /><br />
        {errors.firstName?.type === 'required' && <p className='text-red-400'>First Name is required</p>}

        <input type="text" {...register("lastName")} placeholder='Last Name' className={inputClass} /><br />
        <input type="text" {...register("email", { required: true, unique: true })} placeholder='Email' className={inputClass} /><br />
        {errors.email?.type === 'required' && <p className='text-red-400'>Email is required</p>}
        {errors.email?.type === 'unique' && <p className='text-red-400'>Email already exists</p>}
        <input type="password" {...register("password", { required: true })} placeholder='Password' className={inputClass} /><br />
        {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}

        <input
          type="file"
          accept="image/png, image/jpeg"
          {...register("profileImageUrl")}
          onChange={(e) => {

            //get image file
            const file = e.target.files[0];
            // validation for image format
            if (file) {
              if (!["image/jpeg", "image/png"].includes(file.type)) {
                setError("Only JPG or PNG allowed");
                return;
              }
              //validation for file size
              if (file.size > 2 * 1024 * 1024) {
                setError("File size must be less than 2MB");
                return;
              }
              //Converts file → temporary browser URL(create preview URL)
              const previewUrl = URL.createObjectURL(file);
              setPreview(previewUrl);
              setError(null);
            }

          }} />

        {preview && (
          <div className="mt-3 flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full border"
            />
          </div>
        )}
        <button type="submit" className={primaryBtn}>Register</button>
      </form>
    </div>
  )
}

export default Register
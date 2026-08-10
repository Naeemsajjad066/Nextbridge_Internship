import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../schemas/registerSchema"

function YupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg border border-slate-200 w-80 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-[#0B132B]">Yup Form</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#0B132B]">Name</label>
                    <input {...register("name")} placeholder="Enter your name"
                        className="border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]" />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#0B132B]">Email</label>
                    <input {...register("email")} placeholder="Enter your email"
                        className="border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#0B132B]">Password</label>
                    <input type="password" {...register("password")} placeholder="Enter your password"
                        className="border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]" />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#0B132B]">Confirm Password</label>
                    <input type="password" {...register("confirmPassword")} placeholder="Confirm your password"
                        className="border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]" />
                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="bg-[#0B132B] text-white py-2 rounded-md text-sm hover:opacity-90">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default YupForm

import Button from '../common/Button'
import Input from '../common/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../schemas/signupSchema'

function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Input
        label='Full Name'
        placeholder='Naeem Sajjad'
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        label='Email'
        type='email'
        placeholder='you@example.com'
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label='Password'
        type='password'
        placeholder='••••••••'
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label='Confirm Password'
        type='password'
        placeholder='••••••••'
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Creating account…' : 'Create Account'}
      </Button>
    </form>
  )
}

export default SignupForm

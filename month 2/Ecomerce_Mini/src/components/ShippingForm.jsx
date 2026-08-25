import { MapPin } from 'lucide-react'
import { FormField, SectionHeader } from './FormField'

function ShippingForm({ register, errors }) {
  return (
    <div className='bg-cards rounded-2xl shadow-sm border border-gray-100 p-6'>
      <SectionHeader icon={MapPin} title='Shipping Information' />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FormField
          label='Full Name'
          id='fullName'
          placeholder='Ali Raza'
          registration={register('fullName')}
          error={errors.fullName}
        />
        <FormField
          label='Email'
          id='email'
          placeholder='ali.raza@gmail.com'
          type='email'
          registration={register('email')}
          error={errors.email}
        />
        <FormField
          label='Phone'
          id='phone'
          placeholder='03001234567'
          type='tel'
          registration={register('phone')}
          error={errors.phone}
        />
        <FormField
          label='ZIP Code'
          id='zip'
          placeholder='54000'
          maxLength={5}
          registration={register('zip')}
          error={errors.zip}
        />
        <div className='sm:col-span-2'>
          <FormField
            label='Street Address'
            id='address'
            placeholder='House 12, Street 4, Gulberg III'
            registration={register('address')}
            error={errors.address}
          />
        </div>
        <FormField
          label='City'
          id='city'
          placeholder='Lahore'
          registration={register('city')}
          error={errors.city}
        />
      </div>
    </div>
  )
}

export default ShippingForm

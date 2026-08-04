import React from 'react'
import ProfileName from './ProfileName'

function ProfileInfo({name,profession}) {
  return (
    <div className="mb-4">
      <ProfileName name={name}/>
      <p className="text-sm text-slate-500">{profession}</p>
    </div>
  )
}

export default ProfileInfo
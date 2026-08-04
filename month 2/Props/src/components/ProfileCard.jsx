import Button from './Button'
import ProfileInfo from './ProfileInfo'

function ProfileCard({
    name="Guest",
    profession="No Profession"
}) {
  return (
    <div className="w-60 border border-gray-200 rounded-lg p-5 shadow-sm text-center mx-auto">
        <ProfileInfo name={name} profession={profession}/>
        <Button>
            View Profile
        </Button>
    </div>
  )
}

export default ProfileCard
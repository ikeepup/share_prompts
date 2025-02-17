import PromptCard from "./PromptCard"
const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'> 
        <span className='blue_gradient'>{name}</span> Profile
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post._id)}
          handleDelete={() => handleDelete && handleDelete(post._id)}
        />
      )
      )}
    </div>

    </section>
  )
}

export default Profile
import GetTest from './GetTest'
import PostTest from './PostTest'
import PutTest from './PutTest'
import DeleteTest from './DeleteTest'

export default function RestTest() {
  return (
    <div>
      <p className='text-center test-3xl text-bold'>RestTest</p>
      <GetTest />
      <PostTest />
      <PutTest />
      <DeleteTest />
    </div>
  )
}

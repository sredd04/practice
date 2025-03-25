type HeadernavProps = object;


export default function Headernav({}: HeadernavProps){
  return(
<ul className="flex justify-between text-amber-50 bg-black p-4 shadow-md rounded-md m-4 hover:bg-blue-400">
    <li><a href ="src/app/House">Home</a></li>
    <li>About</li>
    <li>Contact</li>
    </ul>
  )
}
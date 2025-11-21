import homeIcon from '../../assets/home-icon.svg';

export default function Header() {
    return (
        <div className="flex justify-between h-10 items-center px-4 py-2 bg-amber-300 shadow w-full">

            <button className="text-gray-700">
                <img src={homeIcon} alt='home icon' className='w-7 h-7'/>
            </button>
        </div>
    )
}
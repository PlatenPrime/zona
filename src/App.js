
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactComponent as Ballons } from './assets/ballons.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { sendMessageToTelegram } from './utils/sendMessagesTelegram'
import { getArtDataBtrade } from './utils/getArtDataBtrade'







function App() {

	const [arts, setArts] = useState([]);
	const [art, setArt] = useState("")
	const [pieces, setPieces] = useState(0)

	const [error, setError] = useState(null)
	const [quant, setQuant] = useState(null)


	const [isArtsLoading, setIsArtsLoading] = useState(false);
	const [isQuantLoading, setIsQuantLoading] = useState(false);



	useEffect(() => {

		const fetchArts = async () => {
			try {
				setIsArtsLoading(true)
				const { data } = await axios.get(`https://btw-server.up.railway.app/api/arts`);
				setArts(data.arts)
				console.log(data.arts)

			} catch (error) {
				console.log(error)
			} finally {
				setIsArtsLoading(false)
			}
		}

		fetchArts()

	}, [])





	const photo = art.trim().length === 9 && `https://sharik.ua/images/elements_big/${art.trim()}_m1.jpg`

	const link = `https://sharik.ua/ua/search/?q=${art.trim()}`

	let item = art.trim().length === 9 && arts.find(item => item.artikul === art.trim());


	useEffect(() => {

		const fetchQuant = async () => {

			try {
				setIsQuantLoading(true)
				setError(null)
				setQuant(null)
				if (item) {
					const { quant } = await getArtDataBtrade(item?.artikul);
					setQuant(quant);
				}


			} catch (error) {
				console.log(error);
				setError("Щось не так з данними артикула")
			} finally {
				setIsQuantLoading(false)
			}
		}


		fetchQuant()
	}, [item])


	// async function getPogrebi(art) {
	// 	try {
	// 		const result = await getQuant(art);
	// 		setPogrebi(result); // Выведет результат запроса
	// 	} catch (error) {
	// 		console.error(error); // Обработка ошибки, если что-то пошло не так
	// 	}
	// }


	// useEffect(() => {


	// 	if (item) getPogrebi(item.artikul);

	// 	return () => { }
	// }, [item])















	const handleMessage = async () => {


		const message = `
	${item?.zone}
	${item?.nameukr ? item?.nameukr : art}
	${pieces} шт
	${photo}
	`

		try {
			await sendMessageToTelegram(message);
			toast.success('Запит надіслано в Telegram!');

		} catch (error) {
			console.error(error);
		} finally {

		}
	};







	return (


		<div className="
		
		container flex  flex-col  justify-start pt-8 px-4 space-y-4
lg:max-w-7xl

		w-full h-screen 
		
		">



			<form
				onSubmit={(e) => { e.preventDefault() }}
				className="  grid grid-cols-1 lg:grid-cols-3 gap-2">






				<div className="grid lg:col-span-2 gap-2">


					<input
						type="text"
						className="bg-slate-500/20 text-white text-3xl text-center focus:bg-slate-500/50 outline-none rounded-xl"
						value={art}
						onChange={(e) => { setArt(e.target.value) }}
						placeholder="Введи артикул">
					</input>





					<input
						type="number"
						className=" bg-slate-500/20 text-white text-3xl text-center focus:bg-slate-500/50 outline-none rounded-xl w-full"
						value={pieces}
						onChange={(e) => setPieces(e.target.value)}
						placeholder="Введи кількість">

					</input>

				</div>


				<button
					onClick={handleMessage}
					className={`  p-2 text-xl text-green-400 hover:text-white cursor-pointer 
						bg-green-transparent border-2 border-green-500
						disabled:border-slate-500
						disabled:bg-slate-transparent 
						disabled:bg-slate-500/50
						disabled:hover:shadow-xl 
						hover:shadow-xl  hover:shadow-green-500
					hover:bg-green-500
						transition-all duration-500 ease-in-out
						rounded-xl  `}
					disabled={!item}
					type="submit"
				>
					Принести
				</button>


				{/* <button
					onClick={handlerUrgent}
					className={`button hidden md:block mt-4  w-full text-xl bg-rose-500  ${!item && 'bg-rose-500  bg-opacity-20 '}`}
					disabled={!item}

				>
					НУ ШО ТАМ?
				</button> */}



			</form>


			<div
				className="grid grid-cols-1 lg:grid-cols-3 gap-2"
			>

				<div className="col-span-1 flex justify-center items-center bg-white rounded-xl shadow-lg shadow-white">

					{art.trim().length === 9 ?
						<a href={link} target="_blanked">
							{<img className='h-[200px] rounded-lg shadow-2xl shadow-white' src={photo} alt="Изображение артикула" ></img>}
						</a>
						:
						<div
							className="h-[200px] "
						>
							<Ballons />
						</div>
					}

				</div>

				<div
					className="col-span-2 grid grid-cols-2 gap-2 "
				>


					<div className='col-span-2 bg-gradient-to-b from-teal-500 to-teal-900  flex flex-col justify-center  items-center  rounded-xl py-2'>

						<h2 className='text-white text-center text-xl md:text-2xl'>{item?.nameukr || ''}</h2>
					</div>


					<div
						className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-2 "
					>

						<h2 className=' col-span-1 grid place-content-center bg-gradient-to-b from-orange-500 to-orange-900 text-white text-center  text-2xl  rounded-xl py-2 '>
							{item?.zone && <span className="text-black bg-white p-2 rounded" >{item?.zone}</span>}



						</h2>

						<h2 className='grid place-content-center bg-gradient-to-b from-blue-500 to-blue-900 text-white text-center  text-xl  rounded-xl  '>

							{isQuantLoading
								?
								<span className="text-white" >
									Завантажуємо...</span>
								:
								<span  >
								{quant !== null && <>Погреби:  {quant} шт</> }	
								</span>}




						</h2>

					</div>


				</div>


			</div>







			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>


			{isArtsLoading && <h3 className="text-center text-2xl text-white">Артикули завантажуються...</h3>}
			{error && <h3 className="text-center text-2xl text-red-500">{error}</h3>}


		</div >
	);
}

export default App;

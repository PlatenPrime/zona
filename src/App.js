
import axios from 'axios';
import 'tw-elements';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Ballons } from './assets/ballons.svg'
import { ReactComponent as Smile } from './assets/smile-icon.svg'

import Telegram from 'telegram-send-message';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { getQuant } from './utils/getQuant';










function App() {

	const [arts, setArts] = useState([]);
	const [art, setArt] = useState("")
	const [send, setSend] = useState(false)
	const [pogrebi, setPogrebi] = useState("...");




	const pieces = useRef();

	function resetInputNumber() {
		pieces.current.value = 0;
	}



	const fetchArts = async () => {
		try {

			const { data } = await axios.get(`https://btw-server.up.railway.app/api/arts`);
			setArts(data.arts)
			console.log(data.arts)

		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		fetchArts()

	}, [])





	const photo = `https://sharik.ua/images/elements_big/${art.trim()}_m1.jpg`;

	const link = `https://sharik.ua/ua/search/?q=${art.trim()}`


	let item = arts.find(item => item.artikul === art.trim());


	async function getPogrebi(art) {
		try {
			const result = await getQuant(art);
			setPogrebi(result); // Выведет результат запроса
		} catch (error) {
			console.error(error); // Обработка ошибки, если что-то пошло не так
		}
	}


	useEffect(() => {


		if (item) getPogrebi(item.artikul);

		return () => { }
	}, [item])





	// TELEGRAM

	Telegram.setToken("5588902349:AAF9cN9rDnU2kKwYGs3sUXUkLvhKiSDAoiQ");
	Telegram.setRecipient("@kassabtw");
	// Telegram.setRecipient("@workplaten");

	const handlerMessage = () => {

		if (pieces.current.value == 0) {
			toast.error("Введи количество");
		} else {
			setSend(true);

			if (item) {

				toast.success("Запрос полетел на склад");

				setTimeout(() => {
					Telegram.setMessage(`${photo}`);
					Telegram.send();
				}, 200);

				setTimeout(() => {
					Telegram.setMessage(`${item.zone}`);
					Telegram.send();
				}, 400);

				setTimeout(() => {
					Telegram.setMessage(`${art}`);
					Telegram.send();
				}, 600);

				setTimeout(() => {
					Telegram.setMessage(`${pieces.current.value} шт`);
					Telegram.send();
				}, 800);

				setTimeout(() => {
					Telegram.setMessage(`${item.nameukr}`);
					Telegram.send();
				}, 1000);

			}
		}
	}


	// const handlerUrgent = () => {
	// 	Telegram.setMessage(`НУ ШО ТАМ?`);
	// 	Telegram.send();
	// }


	return (


		<div className="
		
		min-h-screen 
		max-h-screen
		overflow-auto

		flex flex-col justify-center md:flex-row  items-stretch
		
		">



			<form
				onSubmit={(e) => { e.preventDefault() }}

				className="w-full md:w-1/4
			 bg-transparent  p-6  shadow-lg first-letter:
			 flex flex-col justify-center
			 
			 ">




				<div className=" mb-6">

					<input
						type="text"
						className="input"
						onChange={(e) => { setArt(e.target.value); setSend(false); resetInputNumber(); setPogrebi("...") }}
						placeholder="Введи артикул">
					</input>

				</div>


				<div className=" mb-6">

					<input
						type="number"
						className=" input hidden md:block "
						ref={pieces}
						onChange={() => setSend(false)}
						placeholder="Введи количество">

					</input>

				</div>


				<button
					onClick={handlerMessage}
					className={`button hidden md:block w-full text-xl  ${!item && 'bg-slate-500  bg-opacity-20 '}`}
					disabled={!item}
					type="submit"
				>
					Принести
				</button>


				// <button
				// 	onClick={handlerUrgent}
				// 	className={`button hidden md:block mt-4  w-full text-xl bg-rose-500  ${!item && 'bg-rose-500  bg-opacity-20 '}`}
				// 	disabled={!item}

				// >
				// 	НУ ШО ТАМ?
				// </button>



			</form>




			<div className='
			my-3 
			 w-full md:w-3/4 
		 flex justify-center items-center
			  '>

				<div className={
					`
				flex flex-col items-center justify-evenly
				border-4 border-sky-500 

				${send ? "border-opacity-100" : "border-opacity-0"}
				${send && "shadow-sky-400"}	
				rounded-lg shadow-2xl
				w-5/6 h-5/6

				`}>




					<div className=' w-full ' >

						{art.trim().length === 9 &&

							<div className='bg-sky-500 bg-opacity-80 shadow-xl shadow-sky-500 flex flex-col justify-center mx-2  items-center border border-sky-500 rounded '>

								<h2 className='text-white text-center p-2 text-xl md:text-2xl'>{item?.nameukr}</h2>
							</div>
						}

					</div>



					<div className="w-5/12 h-5/12 flex justify-center items-center ">

						{art.trim().length === 9 ?
							<a href={link} target="_blanked">
								{<img className='rounded-lg shadow-2xl shadow-white' src={photo} alt="Изображение артикула" ></img>}
							</a> :
							<Ballons></Ballons>}

					</div>






					<div className=" w-full md:flex md:justify-around" >

						{art.trim().length === 9 && <>

							<h2 className=' text-white text-center  text-3xl shadow-2xl shadow-orange-500  bg-orange-300 bg-opacity-50 border-orange-500 rounded  border-2 p-2 my-1'>Зона: {item?.zone}</h2>
							<h2 className='text-white text-center  text-3xl shadow-2xl shadow-sky-500 bg-sky-500 bg-opacity-50 border-sky-500  rounded  border-2 p-2 my-1'> Погреби:  {pogrebi} шт</h2>

						</>

						}


					</div>




				</div>



			</div>





			<ToastContainer
				position="top-right"
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



		</div >
	);
}

export default App;

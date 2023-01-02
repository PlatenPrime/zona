
import axios from 'axios';
import 'tw-elements';
import { useEffect, useState } from 'react';







function App() {

	const [arts, setArts] = useState("");




	const fetchArts = async () => {
		try {

			const { data } = await axios.get(`https://btw-server-2.up.railway.app/api/arts`);
			setArts(data.arts)
			console.log(data.arts)

		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		fetchArts()

	}, [])






	/* let item = artZone.find(item => item.title == artB.trim()); */

	/* const photo = `https://sharik.ua/images/elements_big/${artB.trim()}_m1.jpg`



	const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy); */


	/* 
	
		const handlerMessage = () => {
	
			setMessage(`${zone}__${artB}__${number} шт `)
	
			setMessageCopy(`\r\n
			Зона ${zone}\r\n
			Артикул ${artB}\r\n
			Количество ${number} шт \r\n
			${photo} \r\n
			${name} 
			
			`);
	
			copy(messageCopy);
	
		}
	
	
		const handlerReset = () => {
			setDisplayKasa(false);
			setDisplayTraversa(false)
	
		} */


	/* const handlerKasaMessage = () => {
		setZone(item["zone"]);
		setDisplayKasa(true);
		setDisplayTraversa(false)


	} */

	/* const handlerZone = () => {

		setZone(item["zone"]);
		setDisplayTraversa(true);
		setDisplayKasa(false);

	} */

	/* useEffect(handlerMessage);

	useEffect(() => {
		if (item) setName(item["name"])
	})
 */







	return (


		<div className="
		
		min-h-screen 
		max-h-screen
		overflow-auto

		flex flex-col justify-between md:flex-row  items-stretch
		
		">



			<div className="w-full md:w-1/4
			 bg-transparent  p-6  shadow-lg first-letter:
			 flex flex-col justify-center
			 
			 ">




				<div className=" mb-6">

					<input
						type="text"
						className="input"
						placeholder="Введи артикул">
					</input>

				</div>


				<div className=" mb-6">

					<input type="number"
						className=" input"
						placeholder="Введи количество">

					</input>

				</div>


				<button
					className='button w-full text-xl'
					type="submit"
				>Принести
				</button>





			</div>




			<div className=' w-full md:w-1/2 
		 flex justify-center items-center
			 bg-red-600 bg-opacity-10'>

				<p>карточка артикула (меняет цвет, если скопировалось в буфер)</p>













				

			</div>


			<div className=' flex justify-center items-center w-full md:w-1/4 
			 bg-green-600 bg-opacity-10'>


















				<div className='hidden md:flex justify-center items-center  '>анекдоты</div>

			</div>






		</div >
	);
}

export default App;

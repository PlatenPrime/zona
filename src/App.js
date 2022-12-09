
import axios from 'axios';
import 'tw-elements';
import { useEffect, useState } from 'react';







function App() {

	const [arts, setArts] = useState("");




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
		container mx-auto
		min-h-screen overflow-auto
		border-2 border-blue-400
		flex flex-col md:flex-row
		
		
		
		">



			<div className=" p-6 rounded-lg shadow-lg bg-white ">
				<form onSubmit={(e) => e.preventDefault}>
					<div className=" mb-6">

						<input type="text" className="
        "  placeholder="Введи артикул">

						</input>


					</div>

					<div className=" mb-6">

						<input type="password" className=" block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							placeholder="Password"></input>
					</div>

					<button type="submit" >Submit</button>
				</form>
			</div>


			<div>
				карточка артикула (меняет цвет, если скопировалось в буфер)
			</div>


			<div>
				кнопки
			</div>



			<div className='hidden md:block'>анекдоты</div>


		</div >
	);
}

export default App;

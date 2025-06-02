import Games from '../data/games.json'
			const search = document.querySelector('#simple-search') as HTMLInputElement
			const slider = document.querySelector('#sliderke') as HTMLInputElement
			
			function GamesFilteren(){
				const searchValue = search.value.toLowerCase()
				const sliderValue = Number.parseInt(slider.value)
				const GamesTable = document.querySelector('#GamesTable') as HTMLTableSectionElement

				let filteredGames = []
				filteredGames.push(...Games)

				if (searchValue !== ''){
					filteredGames = filteredGames.filter((game) =>{
						if(game.title.toLowerCase().includes(searchValue)){
							return true
						}
						else return false
					})
				}

				if(sliderValue !== 0){
					filteredGames = filteredGames.filter((game) =>{
						if(game.discountPercentage){
							if(game.discountPercentage >= sliderValue){
							return true
						}
						else return false
						}
					})
				}
				console.log(searchValue)

				GamesTable.innerHTML = ''

				filteredGames.forEach((game) => {
					
					GamesTable.innerHTML += 
            			`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" data-testid="game-list-item">
                			<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    			${game.title}
                			</th>
                			<td class="px-6 py-4 text-green-500 text-right">
                    			${game.discountPercentage? game.discountPercentage +'%' : 'N/A'}
                			</td>
            			</tr>`
				})
			}

			search.addEventListener('input', () =>{
				GamesFilteren()
				
			})
			slider.addEventListener('input', () =>{
				GamesFilteren()
			})
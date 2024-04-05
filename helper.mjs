// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export async function getPhotos(choice) {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
 
        if(choice === 'one')
        {
            const random = () => {
                let number = Math.floor(Math.random() * 1000)
                console.log(number)
                let body =document.querySelector('body')
                let image = document.createElement('img')
                let url = json[number].thumbnailUrl
                image.setAttribute('src', url)
                body.append(image)
            }
            random()
        }
        else{
            const multiple = () => {
            for(let i = 0; i < 50; i++)
                {
                    let body =document.querySelector('body')
                    
                    let image = document.createElement('img')
                    let url = json[i].thumbnailUrl
                    console.log(url)
                    image.setAttribute('src', url)
                    body.append(image)
                }
            }
            multiple()
        }
        
      });
  }
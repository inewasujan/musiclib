import MyComp from "./MyComp";
const GenerateImg = () => {
    const imageArray = [
                'https://source.unsplash.com/random/?albums,album',
                'https://source.unsplash.com/random/?artists',
                'https://source.unsplash.com/random/?songs,musics',
                'https://source.unsplash.com/random/?music'
            ];

    //Randomly generate images
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    //Get the randomly selected image
    const randomImage = imageArray[randomIndex];

    //Return the random image
    return (
        <div className="Random">
            <MyComp randomImage={randomImage} />
        </div>  
    );
};

export default GenerateImg;
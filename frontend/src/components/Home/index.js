
import './Home.css'


function HomePage() {
    return (
        <>
            <h1>Welcome to chairbnb!</h1>
            <h2>Explore the world of chairs. Here's our favorites.</h2>
            <ul className="gridem">
                <ul className="eachfront">
                    <img src="https://images.squarespace-cdn.com/content/v1/597d15bab3db2bde61d747e6/1510875067008-W8BKVUJ6WGGYSE31YLTC/IMG_4207.JPG?format=1000w" className="frontpage" alt='front' />
                    <ul className="chairtitle">McDonald's Greatest Creation</ul>
                    <ul className="chairstuff">$400/night</ul>
                    <ul className="chairstuff">McDonald, California</ul>
                </ul>
                <ul >
                    <img src="https://m.media-amazon.com/images/I/81Ocxr5MOSL._AC_SL1500_.jpg" className="frontpage" alt='front' />
                    <ul className="chairtitle">Children's Tri-Fold Foam Sofa</ul>
                    <ul className="chairstuff">$100/night</ul>
                    <ul className="chairstuff">Walmart, California</ul>
                </ul>
                <ul>
                    <img src="https://d3h6k4kfl8m9p0.cloudfront.net/stories/rP9BLw7RvegPGN2ljwjLkg.jpg" className="frontpage" alt='front' />
                    <ul className="chairtitle">Chair. Great Condition</ul>
                    <ul className="chairstuff">$1.23/night</ul>
                    <ul className="chairstuff">San Jose, California</ul>
                </ul>    </ul>
        </>
    )
}
export default HomePage

// Portfolio.js
import {siteColors} from '../styles/styles'

function Portfolio() {
    const portfolioItems = [
        {
            id: 1,
            title: "Project 1",
            image: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        },
        {
            id: 2,
            title: "Project 2",
            image: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        },
        {
            id: 3,
            title: "Project 3",
            image: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        },
        {
            id: 4,
            title: "Project 4",
            image: "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        },
        {
            id: 5,
            title: "Project 5",
            image: "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        },
        {
            id: 6,
            title: "Project 6",
            image: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        },
        {
            id: 7,
            title: "Project 7",
            image: "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        }
    ];

    return (
        <section className="App-section" id="portfolio" style={{padding: '2rem'}}>
            <div className="container" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1 style={{marginBottom: '1rem'}}>Portfolio</h1>
                <p style={{color: siteColors.green, marginBottom: '2rem'}}>Here are some of my projects.</p>

                <div className="carousel carousel-center w-full rounded-box bg-neutral p-4 space-x-4">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="carousel-item">
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{width: '300px', height: '200px', objectFit: 'cover'}}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-sm">{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

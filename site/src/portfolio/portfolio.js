import {useState} from 'react'
import {siteColors} from '../styles/styles'

function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const portfolioItems = [
        {
            id: 1,
            title: "Valkyries Softball Website",
            image: "/valkyries/valkyries.png",
            url: "https://www.valkyries-softball.org/"
        },
        {
            id: 2,
            title: "Project 2",
            image: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            url: ""
        },
        {
            id: 3,
            title: "Project 3",
            image: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
            url: ""
        },
        {
            id: 4,
            title: "Project 4",
            image: "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
            url: ""
        },
        {
            id: 5,
            title: "Project 5",
            image: "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
            url: ""
        },
        {
            id: 6,
            title: "Project 6",
            image: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
            url: ""
        },
        {
            id: 7,
            title: "Project 7",
            image: "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
            url: ""
        }
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
    }

    return (
        <section className="App-header" id="portfolio" style={{padding: '2rem', minHeight: 'auto'}}>
            <div className="container" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1 style={{marginBottom: '1rem'}}>Portfolio</h1>
                <p style={{color: siteColors.green, marginBottom: '2rem'}}>Here are some of my projects.</p>

                <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                }}>
                    <button
                        onClick={prevSlide}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: siteColors.green,
                            color: '#112240',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        ← Prev
                    </button>

                    <div style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '1000px',
                            border: `2px solid ${siteColors.green}`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#f0f0f0'
                        }}>
                            <a
                                href={portfolioItems[currentIndex].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    cursor: portfolioItems[currentIndex].url ? 'pointer' : 'default',
                                    textDecoration: 'none'
                                }}
                            >
                                <img
                                    src={portfolioItems[currentIndex].image}
                                    alt={portfolioItems[currentIndex].title}
                                    style={{
                                        width: '100%',
                                        height: '700px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </a>
                            <div style={{
                                padding: '1rem',
                                textAlign: 'center',
                                backgroundColor: '#1a1a1a',
                                color: '#fff'
                            }}>
                                <h3 style={{margin: '0', fontSize: '1rem'}}>
                                    {portfolioItems[currentIndex].title}
                                </h3>
                                <p style={{
                                    margin: '0.5rem 0 0 0',
                                    fontSize: '0.875rem',
                                    color: siteColors.green
                                }}>
                                    {currentIndex + 1} / {portfolioItems.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: siteColors.green,
                            color: '#112240',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Next →
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                }}>
                    {portfolioItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: index === currentIndex ? siteColors.green : '#444',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio

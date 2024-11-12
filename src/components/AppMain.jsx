import Button from '../components/Button/Button'

export default function AppMain() {
    return (
        <main id="debug">
            <section className="card col-3">
                <div className="spaceimg_card c-gray2">
                    <span className="within_spaceimg ">600x400</span>
                </div>
                <div className="card_bottom">
                    <h3>Titolo del Post</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim, voluptatem libero, reprehenderit aperiam quasi, ipsam voluptates nobis deserunt voluptatum sequi cumque quas minima nisi. Dicta delectus similique autem ex nemo! Laborum veniam, aspernatur incidunt molestias assumenda iusto, deserunt dicta eum officia fugit id. Optio temporibus nihil vero id adipisci
                    </p>
                    <div>
                        <Button/>
                    </div>
                </div>
            </section>
        </main>
    );
}
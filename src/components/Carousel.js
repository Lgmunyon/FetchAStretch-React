export default function Carousel () {
    return (
        <div className="container-carousel">
            <section class="cardDeck">
                <section class="card-directions">
                    <h3 class="name" >Stretch: Lorem ipsum dolor sit.</h3>
                    <h3 class="directions" >Explanation: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, autem? Iusto itaque quae perspiciatis illo nostrum aspernatur voluptatum, libero sit provident accusantium explicabo est harum omnis quod? Amet, maiores inventore.</h3>
                </section>
                <section class="card-picture">
                    <h3 class="video" >Video:</h3>
                </section>
                <section class="button-timer">
                    <div id="circle" class="circle-ani"></div>
                    <h2 id="sec">30</h2>
                    <div class="start-timer-div">
                        <button onclick="start()" id = 'start' class = "start-timer">Start Timer</button>
                    </div>
                </section>
            </section>
        </div>
    )
}
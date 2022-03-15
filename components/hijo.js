Vue.component ('hijo', {
    template: //html
    `
    <section>
        <h4>Conoce mas de nuestra comunidad</h4>
        <h5>{{numero}}</h5>

        <p>{{nombre}}</p>
    </section>
    `,
    props: ['numero'],
    data() {
        return {
            nombre:'BurgerKid, marca registrada'
        }
    }
})
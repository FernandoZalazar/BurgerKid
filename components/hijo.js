Vue.components ('padre', {
    template: //html
    `
    <section>
        <h4>Componente padre</h4>
    </section>
    <h5>{{numero}}</h5>

    <p>{{nombre}}</p>
    `,
    props: ['numero'],
    data() {
        return {
            nombre:'BurgerKid'
        }
    }
})
Vue.component ('saludo', {
    template: //html
    `<section>
        <h1>{{saludo}}</h1>
        <p>Estas en el lugar que queres</p>

    </section>`,
    data() {
        return {
            saludo: 'BURGER KID'
        }
    }
})
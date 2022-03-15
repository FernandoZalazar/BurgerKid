Vue.component ('padre', {
    template: //html
    `
    <section>
        <h4>Te esperamos en nuetros locales mas cercanos</h4>

        <hijo :numero="numeroPadre"></hijo>
        <button @click=numeroPadre++>+</button>
        <input v-model="numeroPadre"> 
        <button @click=numeroPadre-->-</button>
    </section>
    `,
    data (){
        return {
            numeroPadre: 0,
        }
    }
})
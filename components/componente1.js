Vue.component('componente1', {
    template: //html
    `
    <table :style="style">
        <tr>
            <td class="array">
                {{array}}
                </td>
            <td class="boolean">
                {{boolean}}
            </td>
        </tr>
    </table>
    `,
    props:['array', 'style', 'boolean']
})
const {createApp, ref} = Vue;



const app = createApp(
    {
    /*template: `
    <h1>{{message}}</h1>
    <p>{{author}}</p>
    `,*/
    setup() {

        const message = ref("I'm Cris");
        const author = ref('Bruce Wayne');
        /*setTimeout(() => {

            message.value = 'Cris Sánchez BTW';
            author.value = 'My nick name is actually Crisi';
        }, 1000);*/

        const changeQuote = () => {


            message.value = "Cris Sánchez";
            author.value = "You can call me Crisi";

        }


        return {message, author, changeQuote};

    }
});



app.mount('#myApp');
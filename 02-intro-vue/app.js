
const {createApp, ref, computed} = Vue;

const quotes = [
    { quote: "The night is darkest just before the dawn. And I promise you, the dawn is coming.", author: "Harvey Dent, The Dark Knight" },
    { quote: "I believe what doesn't kill you simply makes you, stranger.", author: "The Joker, The Dark Knight"},
    { quote: "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me", author: "Henri Ducard, Batman Begins" },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: "If you're good at something, never do it for free.", author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]




const app = createApp(
    {

    setup() {

        const showAuthor = ref(true);
        const buttonMessage = ref('Show Author');
        const reactiveQuotes = ref(quotes);
        const totalQuotes = computed(()=> {
            return reactiveQuotes.value.length;
        });

        const newMessage = ref('');
        

        const changeShowAuthorState = () => {
            showAuthor.value = showAuthor.value === true ? false : true;
            buttonMessage.value = showAuthor.value === true ? 'Hide Author' : 'Show Author';
        };


        const addQuote = () => {
            //reactiveQuotes.value.unshift({quote: 'The simple of life can be the wildest for some', author: "Crisi"});
            reactiveQuotes.value.unshift({quote: newMessage.value, author: "Crisi"});
        };

        return {
            reactiveQuotes, 
            showAuthor, 
            changeShowAuthorState, 
            buttonMessage,
            addQuote,
            totalQuotes, 
            newMessage
        };

    }
});



app.mount('#myApp');
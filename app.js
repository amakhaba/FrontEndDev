const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: 'Fifa World Cup',
            author: 'Mike Tyson',
            age: 600
        }
    },
    methods: {
        getshowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
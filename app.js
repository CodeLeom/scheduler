new Vue({
    el: '#vue-app',
    data:{
        characters: ['Romeo', 'Juliet', 'Spider Man', 'Barry Alen'],
        barcaTrio: [
            {name: 'Lionel Messi', wing:'forward'},
            {name: 'Luis Suarez', wing: 'forward'},
            {name: 'Antonio Griezmann', wing: 'forward'}
        ],
        name: 'Leom',
        job: 'Developer',
        website: "https://twitter.com/leomiscoding",
        cart: 0,
        x: 0,
        y: 0,
        age: '',
        major: '',
        Years: 25,
        C: 0,
        D: 0
    },
    methods: {
        add: function(){
            this.cart++;
        },
        sub: function(){
            this.cart--;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }        
    },
    computed: {
        addToC: function(){
            return this.C + this.Years;
        },
        addToD: function(){
            return this.D + this.Years;
        }
    }
});
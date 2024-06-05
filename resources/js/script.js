// Loader Code
$('#app').css('display', 'none');
setTimeout(() => {
    $('#app').css('display', 'block');
    $('#loader').css('display', 'none');
}, 2000);


var vm = new Vue({
    el: '#app',
    data: {

    },
    computed: {

    },

    methods: {
        navBarShow() {
            $("#navbarSupportedContent").toggleClass("show");
        },
    },

    mounted() {
        var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity(elem, {
            cellAlign: 'center',
            contain: true
        });
    }
});

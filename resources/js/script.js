   // Loader Code

        $('#app').css('display', 'none');
        setTimeout(() => {
            $('#app').css('display', 'block');
            $('#loader').css('display', 'none');
        }, 2000);

        $(document).ready(function () {
            $('.navbar-nav>li>a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        });

        var vm = new Vue({
            el: '#app',
            data: {

            },
            computed: {

            },

            methods: {

            },

            mounted() {
                var elem = document.querySelector('.main-carousel');
                var flkty = new Flickity(elem, {
                    cellAlign: 'center',
                    contain: true
                });
            }
        });

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '',
            loading: false,
            error: null
        };
    },
    mounted() {
        this.fetchHello();
    },
    methods: {
        async fetchHello() {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('/hello');
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                this.message = await response.text();
            } catch (err) {
                this.error = 'Failed to reach /hello endpoint: ' + err.message;
            } finally {
                this.loading = false;
            }
        }
    }
}).mount('#app');

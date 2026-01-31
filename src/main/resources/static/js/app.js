const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '',
            loading: false,
            error: null,
            cfenvInfo: null,
            cfenvLoading: false,
            cfenvError: null
        };
    },
    mounted() {
        this.fetchHello();
        this.fetchCfEnv();
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
        },
        async fetchCfEnv() {
            this.cfenvLoading = true;
            this.cfenvError = null;
            try {
                const response = await fetch('/cfenv');
                if (response.status === 404) {
                    this.cfenvInfo = null;
                    return;
                }
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                this.cfenvInfo = await response.json();
            } catch (err) {
                this.cfenvError = 'Failed to reach /cfenv endpoint: ' + err.message;
            } finally {
                this.cfenvLoading = false;
            }
        }
    }
}).mount('#app');
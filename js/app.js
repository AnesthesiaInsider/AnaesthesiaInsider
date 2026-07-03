/* ===========================================
   AnaesthesiaInsider v2
   app.js
=========================================== */

const App = {
    version: "2.0.0-alpha",
    user: {},
    settings: {
        theme: "dark",
        language: "en"
    },

    init() {
        console.log("AnaesthesiaInsider v2 Started");

        this.loadSettings();
        this.loadDashboard();
        this.registerServiceWorker();
    },

    loadSettings() {
        const settings = localStorage.getItem("ai_settings");

        if (settings) {
            this.settings = JSON.parse(settings);
        }
    },

    saveSettings() {
        localStorage.setItem(
            "ai_settings",
            JSON.stringify(this.settings)
        );
    },

    loadDashboard() {
        console.log("Dashboard Loaded");
    },

    registerServiceWorker() {

        if ("serviceWorker" in navigator) {

            navigator.serviceWorker.register("/service-worker.js")

            .then(() => {

                console.log("Service Worker Registered");

            })

            .catch(err => {

                console.log(err);

            });

        }

    }

};

window.onload = () => {

    App.init();

};

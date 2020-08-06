
export  class ConfiguracionFirebase {

    private static configuracionFirebase:ConfiguracionFirebase;

    firebaseConfig:any
    

    private constructor(){
        this.firebaseConfig = {
            apiKey: "AIzaSyDsSVTRMwjps8z5xWis8XSfkGU5chhp1y0",
            authDomain: "envios-5871f.firebaseapp.com",
            databaseURL: "https://envios-5871f.firebaseio.com",
            projectId: "envios-5871f",
            storageBucket: "envios-5871f.appspot.com",
            messagingSenderId: "638947811785",
            appId: "1:638947811785:web:d8262713390074c91c4818"
          }
    }
    public static getConfiguracionFirebae():ConfiguracionFirebase{
        if(this.configuracionFirebase){
            return this.configuracionFirebase;
        }
        else{
            this.configuracionFirebase = new ConfiguracionFirebase();
            return this.configuracionFirebase;
        }
    }


    
}
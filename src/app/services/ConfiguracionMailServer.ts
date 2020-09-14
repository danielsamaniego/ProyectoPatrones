
export  class ConfiguracionMailServer {

    private static configuracionMailServer:ConfiguracionMailServer;

    transporter_config:any
    email_config:string
    

    private constructor(){
        this.transporter_config = {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "552d1cdca56eb7",
            pass: "930c185321d0bf"
            },
            logger: true
        };
        this.email_config = 'examenpatronesespe@yahoo.com';
    }
    public static getConfiguracionMailServer():ConfiguracionMailServer{
        
        if(this.configuracionMailServer){
            return this.configuracionMailServer;
        }
        else{
            this.configuracionMailServer = new ConfiguracionMailServer();
            return this.configuracionMailServer;
        }
    }


    
}
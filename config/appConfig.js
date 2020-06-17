let appConfig={};
appConfig.PORT=3001;
appConfig.environment="dev";
appConfig.apiVersion="1.0.0";
appConfig.allowedCorsOrigin="*";
appConfig.db={
    url:'mongodb://localhost:27017/blogApp'
}
module.exports=appConfig;


import { ApiBootstrap } from "./api.bootstrap";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
import 'dotenv/config'

//import config file to here
import './main-config';

require('dotenv').config();


const appBootstrapInstance = new ApiBootstrap(apiBundleConfigBuilder().config);

appBootstrapInstance
  .bootstrap()
  .then((app) => {
    console.log("[API started]");
  })
  .catch(err => console.log(err));


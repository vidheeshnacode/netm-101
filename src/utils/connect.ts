import mongoose from "mongoose";
import config from 'config';
import logger from './logger';

async function connect(){
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri);
        logger.info("connected to db");
    } catch(error) {
        console.log("could not connect to db");
        logger.error(error);
        process.exit(1);
    }
}

export default connect;
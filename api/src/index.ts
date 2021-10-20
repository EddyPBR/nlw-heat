import "dotenv/config";

import { serverHttp } from "./app";

const { PORT } = process.env;

serverHttp.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

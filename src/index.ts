// import { FileController } from './controller/file.controller';

import { CreateController } from './controller/create.controller';

// const fileController = new FileController();

// const directory = 'nice';
// fileController.createDirectory(directory);
// fileController.createMarkdown('123', directory);

const createController = new CreateController();
createController.create(10, 100);

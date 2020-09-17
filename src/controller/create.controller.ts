/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { FileController } from './file.controller';

export interface Sidebars {
  [id: string]: string[];
}

export class CreateController {
  private fileController = new FileController();

  public create(dirCount: number, fileCount: number) {
    const sidebars: Sidebars = {};
    const now = new Date().getTime();
    this.fileController.createDirectory(`${now}`);
    for (let dirRound = 0; dirRound < dirCount; dirRound++) {
      console.log(`Directory round #${dirRound}`);
      const dirName = `dir${now}${dirRound}`;
      this.fileController.createDirectory(`${now}/${dirName}`);
      sidebars[dirName] = [];
      for (let fileRound = 0; fileRound < fileCount; fileRound++) {
        const docId = `doc-${now}-${dirRound}-${fileRound}`;
        this.fileController.createMarkdown(docId, `${now}/${dirName}`);
        sidebars[dirName].push(`${now}/${dirName}/${docId}`);
      }
    }
    console.log(`========================`);
    this.fileController.createSidebars(sidebars, `${now}`);
    // const sidebarsJson = JSON.stringify(sidebars)

    // console.log(JSON.stringify(sidebars));
  }
}

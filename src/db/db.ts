import * as oracledb from "oracledb";

function createConnection(user: string, password: string, connectString: string): Promise<any> {
  return oracledb.getConnection({ user, password, connectString });
}
